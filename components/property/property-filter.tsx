"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PropertyFilterProps } from "@/types/components/property-filter";

const FormSchema = z.object({
  propertyType: z.string().optional(),
  island: z.string().optional(),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  minPrice: z.string().optional(),
  maxPrice: z.string().optional(),
});

const PropertyFilter: React.FC<PropertyFilterProps> = ({ type }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  return (
    <Card
      className={`${
        type === "box" ? "max-xs:w-full w-[400px]" : "w-full max-sm:w-[400px] max-xs:w-full"
      } `}
    >
      {type === "box" && (
        <CardHeader className="p-3 pb-0">
          <CardTitle className="text-2xl font-medium">
            Find a property that suits you
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className="p-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`${
              type === "box"
                ? "grid grid-cols-1 gap-5"
                : "grid max-xs:grid-cols-1 sm:grid-cols-[repeat(4,12%)_25%_1fr]  md:grid-cols-[repeat(4,0.5fr)_1fr_0.2fr] max-sm:gap-5 gap-8"
            }`}
          >
            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>What type of property?</SelectLabel>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="luxury-rentals">
                          Luxury Rentals
                        </SelectItem>
                        <SelectItem value="modern-apartments">
                          Modern Apartments
                        </SelectItem>
                        <SelectItem value="industrial-spaces">
                          Industrial Spaces
                        </SelectItem>
                        <SelectItem value="beachfront-villas">
                          Beachfront Villas
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="island"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Island" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>On which island?</SelectLabel>
                        <SelectItem value="saint-kitts">Saint Kitts</SelectItem>
                        <SelectItem value="nevis">Nevis</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>
                          How many bedrooms are you looking for?
                        </SelectLabel>
                        <SelectItem value="1">1 Bedroom</SelectItem>
                        <SelectItem value="2">2 Bedrooms</SelectItem>
                        <SelectItem value="3">3 Bedrooms</SelectItem>
                        <SelectItem value="4">4 Bedrooms</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bathrooms"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Bathrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>
                          How many bathrooms are you looking for?
                        </SelectLabel>
                        <SelectItem value="1">1 Bathroom</SelectItem>
                        <SelectItem value="2">2 Bathrooms</SelectItem>
                        <SelectItem value="3">3 Bathrooms</SelectItem>
                        <SelectItem value="4">4 Bathrooms</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-2">
              <FormField
                control={form.control}
                name="minPrice"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Min. Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Minimum Price</SelectLabel>
                          <SelectItem value="50,000">50,000</SelectItem>
                          <SelectItem value="60,000">60,000</SelectItem>
                          <SelectItem value="70,000">70,000</SelectItem>
                          <SelectItem value="80,000">80,000</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxPrice"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Max. Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Maximum Price</SelectLabel>
                          <SelectItem value="150,000">150,000</SelectItem>
                          <SelectItem value="200,000">200,000</SelectItem>
                          <SelectItem value="400,000">400,000</SelectItem>
                          <SelectItem value="800,000">800,000</SelectItem>
                          <SelectItem value="1,200,000">1,200,000</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full text-white font-bold">
              Search Properties
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PropertyFilter;
