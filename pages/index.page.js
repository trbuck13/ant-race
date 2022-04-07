import Link from 'next/link';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="green-gradiant flex min-h-screen items-center">
      <div className="mx-auto max-w-4xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="font-regular text-xl text-yellow-100 ">
          <span className="block">North American Ant Association’s</span>
        </h2>
        <h2 className="mb-8 text-6xl font-extrabold text-yellow-300">
          <span className="block ">National Championships</span>
        </h2>
        <Button>
          <Link href="/leaderboard"> View Leaderboard</Link>
        </Button>
      </div>
    </div>
  );
}
