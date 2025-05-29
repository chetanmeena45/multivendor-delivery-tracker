"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Truck, Package, User } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "vendor";
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login - in a real app, this would make an API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect based on role
      if (role === "vendor") {
        router.push("/vendor");
      } else if (role === "delivery") {
        router.push("/delivery");
      } else {
        router.push("/customer");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center gap-2 mb-6 text-primary">
          <Truck className="h-5 w-5" />
          <span className="font-medium">Back to home</span>
        </Link>
        
        <Tabs defaultValue={role} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="vendor" onClick={() => router.push("/login?role=vendor")}>
              <Package className="h-4 w-4 mr-2" />
              Vendor
            </TabsTrigger>
            <TabsTrigger value="delivery" onClick={() => router.push("/login?role=delivery")}>
              <Truck className="h-4 w-4 mr-2" />
              Delivery
            </TabsTrigger>
            <TabsTrigger value="customer" onClick={() => router.push("/login?role=customer")}>
              <User className="h-4 w-4 mr-2" />
              Customer
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="vendor">
            <LoginCard 
              title="Vendor Login"
              description="Manage your orders and track deliveries"
              icon={<Package className="h-6 w-6" />}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              onSubmit={handleLogin}
              isLoading={isLoading}
            />
          </TabsContent>
          
          <TabsContent value="delivery">
            <LoginCard 
              title="Delivery Login"
              description="Access your delivery tasks and update status"
              icon={<Truck className="h-6 w-6" />}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              onSubmit={handleLogin}
              isLoading={isLoading}
            />
          </TabsContent>
          
          <TabsContent value="customer">
            <LoginCard 
              title="Customer Login"
              description="Track your orders and manage your account"
              icon={<User className="h-6 w-6" />}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              onSubmit={handleLogin}
              isLoading={isLoading}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

interface LoginCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

function LoginCard({
  title,
  description,
  icon,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  isLoading
}: LoginCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="text-xs text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input 
              id="password" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="#" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}