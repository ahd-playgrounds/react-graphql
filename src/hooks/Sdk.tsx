import React, { createContext, FC, useContext } from 'react';
import Sdk, { SdkCstr } from '../sdk';

const ServiceContext = createContext<Sdk | null>(null);

export const useSdk = () => {
  const services = useContext(ServiceContext);

  if (services === null) {
    throw new Error('useSdk must be called within SdkProvider');
  }

  return services;
};

interface ISdkProvider {
  params: SdkCstr;
}

export const SdkProvider: FC<ISdkProvider> = ({ children, params }) => <ServiceContext.Provider
  value={new Sdk(params)}>{children}</ServiceContext.Provider>;
