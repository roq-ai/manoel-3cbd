import { UserInterface } from 'interfaces/user';
import { VehicleInterface } from 'interfaces/vehicle';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  start_time: any;
  end_time: any;
  customer_id?: string;
  vehicle_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  vehicle?: VehicleInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  vehicle_id?: string;
}
