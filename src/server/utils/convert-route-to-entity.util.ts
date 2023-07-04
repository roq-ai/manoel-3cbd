const mapping: Record<string, string> = {
  bookings: 'booking',
  companies: 'company',
  users: 'user',
  vehicles: 'vehicle',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
