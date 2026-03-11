import { Hero1 } from '../../registry/components/hero/hero_1/hero_1';

export default function Home() {
  const topPanel = {
    title: 'Hero 1',
    subtitle: 'Hero 1 subtitle',
  };
  const bottomPanel = {
    title: 'Hero 1',
    subtitle: 'Hero 1 subtitle',
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <Hero1
        topPanel={{
          title: 'TOP PICKS IN POPULAR',
          subtitle: 'TECH & MORE',
          image: 'https://via.placeholder.com/150',
        }}
        bottomPanel={{ title: 'KERUI', subtitle: 'ENJOY THE SECURITY' }}
      />
    </div>
  );
}
