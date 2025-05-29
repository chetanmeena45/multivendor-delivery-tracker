"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Navigation } from "lucide-react";
import { Order } from "@/types/order";
import { Badge } from "@/components/ui/badge";

interface DeliveryMapProps {
  currentOrder: Order;
}

export default function DeliveryMap({ currentOrder }: DeliveryMapProps) {
  // In a real application, this would use a mapping library like Leaflet or Google Maps API
  // Here we're creating a simplified map visualization
  
  // Simulate driver's current location (would come from GPS in real app)
  const [driverLocation, setDriverLocation] = useState({ lat: 37.7749, lng: -122.4194 });
  
  // Simulate movement
  useEffect(() => {
    const interval = setInterval(() => {
      setDriverLocation(prev => ({
        lat: prev.lat + (Math.random() * 0.001 - 0.0005),
        lng: prev.lng + (Math.random() * 0.001 - 0.0005),
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-gray-200 overflow-hidden rounded-b-lg">
      {/* This would be replaced with an actual map library in production */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 overflow-hidden">
        {/* Simplified map grid */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
          {Array.from({ length: 64 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-gray-300/30"
              style={{
                backgroundColor: i % 7 === 0 ? 'rgba(229, 231, 235, 0.6)' : 'transparent'
              }}
            />
          ))}
        </div>
        
        {/* Road visualization */}
        <div className="absolute top-1/2 left-0 right-0 h-8 bg-gray-400/20 transform -translate-y-1/2" />
        <div className="absolute top-0 bottom-0 left-1/3 w-8 bg-gray-400/20 transform -translate-x-1/2" />
        
        {/* Destination marker */}
        <div className="absolute top-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            <MapPin className="h-8 w-8 text-primary" />
            <Badge className="absolute -top-6 -right-16 whitespace-nowrap">Destination</Badge>
          </div>
        </div>
        
        {/* Origin marker */}
        <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            <MapPin className="h-8 w-8 text-gray-700" />
            <Badge variant="outline" className="absolute -top-6 -right-10 whitespace-nowrap">Origin</Badge>
          </div>
        </div>
        
        {/* Driver location with animation */}
        <div 
          className="absolute z-20 transition-all duration-3000 ease-linear"
          style={{ 
            top: `${40 + driverLocation.lat % 10 * 2}%`, 
            left: `${35 + driverLocation.lng % 10 * 3}%`
          }}
        >
          <div className="relative animate-pulse">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/30 rounded-full" />
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500/50 rounded-full" />
            <Navigation className="h-6 w-6 text-blue-600 transform -rotate-45" />
          </div>
        </div>
      </div>
      
      {/* Map controls overlay */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <div className="p-2 rounded-md bg-background shadow-md">
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-muted">+</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-muted">−</button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4">
        <div className="px-3 py-2 rounded-md bg-background/90 shadow-md text-sm">
          <p className="font-medium">ETA: 15 min</p>
          <p className="text-muted-foreground text-xs">5.2 km remaining</p>
        </div>
      </div>
    </div>
  );
}