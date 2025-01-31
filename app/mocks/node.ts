import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw'

// put one-off handlers that don't really need an entire file to themselves here
const miscHandlers = [
  http.get('https://example.com/user', () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),
];

export const server = setupServer(...miscHandlers);
