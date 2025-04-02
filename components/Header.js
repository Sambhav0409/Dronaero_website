import Link from 'next/link';

export default function Header() {
  return (
    <header className="pt-20 pb-12">
      <div className="block w-12 h-12 mx-auto mb-4 rounded-full bg-conic-180 from-gradient-3 from-0% to-gradient-4 to-100%" />
      <p className="text-3xl font-bold text-center dark:text-white">
        <Link href="/">DronAero</Link>
      </p>
      <p className="text-center text-lg dark:text-gray-300">
        Revolutionizing Drone-Based Delivery: B2B | B2C | C2C
      </p>
    </header>
  );
}