"""
List Google Drive files inside a folder and save name → ID mapping.

Before running:
1. pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
2. Place your OAuth desktop-app credentials as credentials.json alongside this script.
3. Replace FOLDER_ID with the Drive folder’s ID (from the share link).
"""

import csv
import os
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import pickle

SCOPES = ["https://www.googleapis.com/auth/drive.readonly"]
FOLDER_ID = "1Vj4j4Uq55_vRUyMEU2H6SIjJByvNbhit"
TOKEN_PATH = "token.pickle"
OUTPUT_CSV = "drive_asset_map.csv"

def get_drive_service():
    creds = None
    if os.path.exists(TOKEN_PATH):
        with open(TOKEN_PATH, "rb") as token_file:
            creds = pickle.load(token_file)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file("credentials.json", SCOPES)
            creds = flow.run_local_server(port=0)
        with open(TOKEN_PATH, "wb") as token_file:
            pickle.dump(creds, token_file)

    return build("drive", "v3", credentials=creds)

def list_files(service, folder_id):
    files = []
    query = f"'{folder_id}' in parents and trashed = false"
    page_token = None

    while True:
        response = service.files().list(
            q=query,
            fields="nextPageToken, files(id, name)",
            pageSize=1000,
            pageToken=page_token,
        ).execute()

        files.extend(response.get("files", []))
        page_token = response.get("nextPageToken")
        if not page_token:
            break

    return files

def main():
    service = get_drive_service()
    files = list_files(service, FOLDER_ID)

    if not files:
        print("No files found in the specified folder.")
        return

    with open(OUTPUT_CSV, "w", newline="", encoding="utf-8") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["file_name", "file_id"])
        for file in sorted(files, key=lambda f: f["name"].lower()):
            writer.writerow([file["name"], file["id"]])

    print(f"Wrote {len(files)} entries to {OUTPUT_CSV}")

if __name__ == "__main__":
    main()
