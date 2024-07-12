export interface UserPostResponse {
  token: string;
}
export interface DevicePostResponse {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}

export interface CreateDevicePostResponse {
  rating: number;
  id: number;
  name: string;
  price: number;
  brandId: number;
  typeId: number;
  img: string;
  updatedAt: string;
  createdAt: string;
}

export interface DeviceOptionsGetResponse {
  data: object[];
}

export interface DevicesGetResponse {
  count: number;
  rows: object[];
}
