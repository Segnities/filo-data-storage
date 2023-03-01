import { useEffect, useState } from 'react';

export enum Devices {
	mobile = 'mobile',
	tablet = 'tablet',
    desktop = 'desktop'
}

function useGetClientDevice(): string {
	const [clientDevice, setClientDevice] = useState<string>('');

	useEffect(() => {
		const clientWidth: number = document.body.clientWidth;

		if (clientWidth <= 640) {
            setClientDevice(Devices.mobile);
        } else if (clientWidth > 640  && clientWidth <= 1280) {
            setClientDevice(Devices.tablet);
        } else if(clientWidth  > 1280 ) {
            setClientDevice(Devices.desktop);
        }
	}, []);

	return clientDevice;
}

export { useGetClientDevice };
