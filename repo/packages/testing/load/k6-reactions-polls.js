import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20,
  duration: '30s'
};

export default function () {
  const res = http.post('http://localhost:4000/api/reactions', JSON.stringify({
    contentId: 'sample-content',
    type: 'heart'
  }), { headers: { 'Content-Type': 'application/json' } });

  check(res, { 'status 200': (r) => r.status === 200 });
  sleep(1);
}
