import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import { Package, Truck, MapPin, PieChart } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DeliTrack</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm font-medium hover:underline">Features</Link>
              <Link href="#how-it-works" className="text-sm font-medium hover:underline">How it works</Link>
              <Link href="#pricing" className="text-sm font-medium hover:underline">Pricing</Link>
            </nav>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button asChild variant="outline" className="hidden md:flex">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mb-6">
              Real-time delivery tracking for your business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              Connect vendors, delivery personnel, and customers with seamless real-time tracking and communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button asChild size="lg">
                <Link href="/login?role=vendor">For Vendors</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/login?role=delivery">For Delivery Teams</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-muted/50 px-4 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Real-time Tracking</h3>
                <p className="text-muted-foreground">Track delivery personnel in real-time with accurate GPS positioning.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Order Management</h3>
                <p className="text-muted-foreground">Easily manage orders from creation to completion with status updates.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <PieChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground">Gain insights with comprehensive analytics on delivery performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="px-4 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">How it Works</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                  <div className="text-center p-6">
                    <Truck className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Map Demo</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-none w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">1</div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Create Orders</h3>
                    <p className="text-muted-foreground">Vendors create delivery orders with destination details and assign to delivery personnel.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">2</div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Track in Real-time</h3>
                    <p className="text-muted-foreground">Delivery personnel share their location in real-time as they make their deliveries.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">3</div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Customer Transparency</h3>
                    <p className="text-muted-foreground">Customers receive a tracking link to monitor their delivery's progress in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground px-4 py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to streamline your deliveries?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">Join thousands of businesses that trust DeliTrack for their delivery management needs.</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/login">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Truck className="h-5 w-5 text-primary" />
            <span className="text-lg font-medium">DeliTrack</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</Link>
            <div className="text-sm text-muted-foreground">© 2025 DeliTrack. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}