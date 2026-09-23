import type { NextConfig } from 'next';

const config: NextConfig = {
  async headers() {
    return [
      {
        // As demos precisam poder ser abertas dentro de uma moldura —
        // é assim que um cliente vê o modelo sem sair da vitrine. O
        // resto do site não ganha nada com isso.
        source: '/demo/:caminho*',
        headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }],
      },
    ];
  },
};

export default config;
