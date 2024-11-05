// components/providers.tsx
'use client';

import {PrivyProvider} from '@privy-io/react-auth';

export default function Providers({children}: {children: React.ReactNode}) {
  return<PrivyProvider
  appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
  config={{
    // Customize Privy's appearance in your app
    appearance: {
      theme: "dark",
      accentColor: "#676FFF",
    },
  }}
  clientId='client-WY5dQwGXwr4wkDfz1CizvJK3c5r2FHEdqqs3g3z8szt3g'
>{children}</PrivyProvider>;
}