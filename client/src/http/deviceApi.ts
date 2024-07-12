import { $authHost, $host } from './index.ts';
import { CreateDevicePostResponse, DeviceOptionsGetResponse, DevicePostResponse, DevicesGetResponse } from '../types/types';

export const createType = async (type: string) => {
  const { data }: DevicePostResponse = await $authHost.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data }: DevicesGetResponse = await $host.get('api/type');
  return data;
};

export const createBrand = async (brand: string) => {
  const { data }: DevicePostResponse = await $authHost.post('api/brand', brand);
  return data;
};

export const fetchBrands = async () => {
  const { data }: DeviceOptionsGetResponse = await $host.get('api/brand');
  return data;
};

export const createDevice = async (device: object) => {
  const { data }: CreateDevicePostResponse = await $authHost.post('api/device', device);
  return data;
};

export const fetchDevices = async (typeId: number, brandId: number, page: string, limit: number = 5) => {
  const { data }: DevicesGetResponse = await $host.get('api/device', {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneDevice = async (id: any) => {
  const { data }: DevicesGetResponse = await $host.get('api/device/' + id);
  return data;
};
