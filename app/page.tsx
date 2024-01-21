import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ThingCard from "@/components/ui/thing-card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="font-medium text-5xl">This or That</h1>
        <Separator />
        <h2 className="text-lg">Compare ridiculous things</h2>
      </div>
      <div>
        <ThingCard />
        <ThingCard />
        <ThingCard />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href='/add-thing'>
          <Button>{'<'} add a thing</Button>
        </Link>
        <Link href='compare-things'>
          <Button>compare a thing {'>'}</Button>
        </Link>
      </div>
    </main>
  );
}
