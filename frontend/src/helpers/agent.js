const baseUrl = 'http://localhost:4000/api/v1';

export const agent = {
  // event
  getEvents: (queryString = '') => {
    return fetch(`${baseUrl}/events?${queryString}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};
