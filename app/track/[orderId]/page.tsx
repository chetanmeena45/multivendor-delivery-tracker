"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Package,
  Truck,
  MapPin,
  Clock,
  ChevronRight,
  CheckCircle,
  PhoneCall,
  Mail,
  ArrowLeft,
  User,
} from "lucide-react";
import Link from "next/link";
import DeliveryMap from "@/components/delivery/delivery-map";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { mockOrders } from "@/lib/mock-data";

export default function TrackOrderPage({ params }: { params: { orderId: string } }) {
  const { orderId } = params;
  const [order, setOrder] = useState(mockOrders[0]);
  const [progress, setProgress] = useState(75);

  // In a real app, this would fetch the order by ID
  useEffect(() => {
    // Simulate fetching the order
    const foundOrder = mockOrders.find(o => o.id === orderId) || mockOrders[0];
    setOrder(foundOrder);

    // Simulate progress updates
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 2;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [orderId]);

  // Calculate the estimated delivery time
  const estimatedDelivery = new Date();
  estimatedDelivery.setMinutes(estimatedDelivery.getMinutes() + 30);
  const estimatedTimeString = estimatedDelivery.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Truck className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">DeliTrack</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" passHref>
                <Button variant="ghost" size="sm" className="gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Back to Home</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight flex items-center">
              <Package className="mr-2 h-8 w-8" />
              Track Order #{order.id}
            </h1>
            <p className="text-muted-foreground mt-1">
              Track your delivery in real-time
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Order info and status */}
            <div className="space-y-6 lg:col-span-1">
              {/* Order Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Status</CardTitle>
                  <CardDescription>
                    Order placed on {order.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Delivery Progress</span>
                      <span className="text-sm font-medium">{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  
                  <div className="relative ml-2 space-y-6 pb-1">
                    {/* Status timeline */}
                    <div className="absolute inset-y-0 left-7 w-0.5 bg-muted-foreground/30" />
                    
                    <div className="relative flex gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">Order Confirmed</span>
                        <span className="text-sm text-muted-foreground">
                          {order.date} at 10:25 AM
                        </span>
                      </div>
                    </div>

                    <div className="relative flex gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">Picked Up</span>
                        <span className="text-sm text-muted-foreground">
                          {order.date} at 10:45 AM
                        </span>
                      </div>
                    </div>

                    <div className="relative flex gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
                        <Truck className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">In Transit</span>
                        <span className="text-sm text-muted-foreground">
                          Currently on the way to your location
                        </span>
                      </div>
                    </div>

                    <div className="relative flex gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">Out for Delivery</span>
                        <span className="text-sm text-muted-foreground">
                          Estimated arrival at {estimatedTimeString}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Items</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Order #:</span>
                        <span className="font-medium">{order.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Items:</span>
                        <span className="font-medium">{order.items} items</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Amount:</span>
                        <span className="font-medium">${order.amount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payment:</span>
                        <span className="font-medium">{order.paymentMethod}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Delivery Address</h3>
                    <p className="mb-2">{order.deliveryAddress}</p>
                    <p className="text-sm text-muted-foreground">
                      Recipient: {order.customer}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Driver Info */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Delivery Driver</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">John Delivery</p>
                      <p className="text-sm text-muted-foreground">Driver #1024</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <PhoneCall className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Live Tracking</CardTitle>
                  <CardDescription>
                    Watch your delivery in real-time
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 pb-0">
                  <div className="aspect-video lg:aspect-auto lg:h-[560px] rounded-b-lg overflow-hidden">
                    <DeliveryMap currentOrder={order} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}