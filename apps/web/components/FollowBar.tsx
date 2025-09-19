export function FollowBar() {
  const btn = "px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm";
  return (
    <div className="flex flex-wrap gap-2">
      <a className={btn} href="https://instagram.com/glow991fm" target="_blank">Instagram</a>
      <a className={btn} href="https://tiktok.com/@glow991fm" target="_blank">TikTok</a>
      <a className={btn} href="https://youtube.com" target="_blank">YouTube</a>
      <a className={btn} href="https://facebook.com/glow991fm" target="_blank">Facebook</a>
      <a className={btn} href="https://x.com/glow991fm" target="_blank">X</a>
      <a className={btn} href="/whatsapp" >WhatsApp</a>
    </div>
  );
}
