// components/providers.tsx
'use client';

import {PrivyProvider} from '@privy-io/react-auth';

export default function Providers({children}: {children: React.ReactNode}) {
  return<PrivyProvider
  appId="cm3354dfi04u5mbx8w3a7zfx8"
  config={{
    // Customize Privy's appearance in your app
    appearance: {
      theme: "dark",
      accentColor: "#676FFF",
    },
  }}
>{children}</PrivyProvider>;
}