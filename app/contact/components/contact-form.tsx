'use client';

import { FieldDescription, FieldGroup, Field, FieldLabel, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { ChevronDownIcon } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';

const schema = z.object({
  firstName: z.string().min(1, "First name is required").max(100, "First name is too long"),
  lastName: z.string().min(1, "Last name is required").max(100, "Last name is too long"),
  email: z.email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short").max(15, "Phone number is too long"),
  eventDate: z.date().optional(),
  location: z.string().max(200, "Location is too long").optional(),
  service: z.string().min(1, "Input is required").max(150),
  description: z.string().min(1, "Description is required").max(1000, "Description is too long"),
  inspo: z.string().max(300, "Input is too long").optional(),
  howDidYouHear: z.string().min(1, "Input is required").max(100),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      eventDate: undefined,
      location: '',
      service: '',
      description: '',
      inspo: '',
      howDidYouHear: '',
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openEventDate, setOpenEventDate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(data: z.infer<typeof schema>) {
    setIsSubmitting(true);
    try {
      await axios.post('/api/contact', data);
      setSubmitted(true);
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Something went wrong, please try again or email me directly at kimberlypnguyenphotography@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 min-h-[80vh] flex items-center justify-center text-white relative text-white bg-stone-900/50 overflow-hidden">
      <Image
        src="/bg/1.png"
        alt="Contact Form Background"
        fill sizes='100vw'
        className="absolute -z-10 blur-lg scale-110 bg-stone-900 inset-0 w-full h-full object-cover"
      />

      {submitted ? (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-script text-8xl md:text-9xl mb-6">Thanks!</h1>
          <p className="text-xl mb-8 leading-relaxed">
            I've received your inquiry and I'll be in touch within 2-3 business days to schedule our consultation.
          </p>
          <div className="w-16 h-0.5 bg-white/30 mx-auto mb-8 rounded-full" />
          <p className="opacity-80">
            In the meantime, feel free to follow along on{' '}
            <Link href="https://www.instagram.com/keemkaptures/" target="_blank" className="underline">
              Instagram
            </Link>{' '}
            to see my latest work.
          </p>
          <p className="font-script text-4xl mt-12 px-10 w-max ml-auto -rotate-5">
            talk soon! -KN
          </p>
        </div>
      ) : (
        <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="font-script text-9xl text-center">Contact</h2>
          <h3 className="font-jost mb-6 text-center">Let's get in touch</h3>

          <div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FieldGroup>
                <div className='grid grid-cols-2 gap-4'>
                  <Controller control={form.control} name="firstName" render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="firstName">First name *</FieldLabel>
                      <Input {...field} id="firstName" autoComplete="off" placeholder="First name" aria-invalid={fieldState.invalid} />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )} />

                  <Controller control={form.control} name="lastName" render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="lastName">Last name *</FieldLabel>
                      <Input {...field} id="lastName" autoComplete="off" placeholder="Last name" aria-invalid={fieldState.invalid} />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )} />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <Controller control={form.control} name="email" render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="email">Email *</FieldLabel>
                      <Input {...field} id="email" autoComplete="email" placeholder="you@example.com" aria-invalid={fieldState.invalid} />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )} />

                  <Controller control={form.control} name="phone" render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="phone">Phone *</FieldLabel>
                      <Input {...field} id="phone" type="tel" autoComplete="tel" placeholder="Phone number" aria-invalid={fieldState.invalid} />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )} />
                </div>

                <Controller control={form.control} name="service" render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="service">What do you need my help capturing? *</FieldLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger {...field} id="service" aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder="Select an option"/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Wedding">Wedding</SelectItem>
                        <SelectItem value="Engagement">Engagement</SelectItem>
                        <SelectItem value="Graduation">Graduation</SelectItem>
                        <SelectItem value="Couples Portraits">Couples Portraits</SelectItem>
                        <SelectItem value="Family/Maternity">Family/Maternity</SelectItem>
                        <SelectItem value="Individualized Session">Individualized Session</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )} />

                <Controller control={form.control} name="description" render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="description">Description *</FieldLabel>
                    <FieldDescription>Go into detail about what you need help capturing & tell me a little bit about yourself as well!</FieldDescription>
                    <Textarea {...field} id="description" placeholder="Describe your needs and a little about yourself." aria-invalid={fieldState.invalid} />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )} />

                <Controller control={form.control} name="eventDate" render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="eventDate">Event date</FieldLabel>
                    <FieldDescription>Tell me when you need me, so I can check my calendar for availability.</FieldDescription>
                    <Popover open={openEventDate} onOpenChange={setOpenEventDate}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" id="date" className="w-48 justify-between bg-transparent font-normal">
                          {field?.value ? field.value.toLocaleDateString() : "Select date"}
                          <ChevronDownIcon />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          captionLayout="dropdown"
                          onSelect={(date) => {
                            field.onChange(date)
                            setOpenEventDate(false)
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )} />

                <Controller control={form.control} name="location" render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="location">Location</FieldLabel>
                    <FieldDescription>If location is unconfirmed, leave blank.</FieldDescription>
                    <Input {...field} id="location" autoComplete="off" placeholder="City, venue, or address" aria-invalid={fieldState.invalid} />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )} />

                <Controller control={form.control} name="inspo" render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="inspo">Feel free to link a mood board/visual inspo here! <span className='font-normal opacity-80 text-sm italic'>(optional)</span></FieldLabel>
                    <Input {...field} id="inspo" autoComplete="off" placeholder="Links or short notes" aria-invalid={fieldState.invalid} />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )} />

                <Controller control={form.control} name="howDidYouHear" render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="howDidYouHear">How did you hear about me? *</FieldLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger {...field} id="howDidYouHear" aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Instagram">Instagram</SelectItem>
                        <SelectItem value="Facebook">Facebook</SelectItem>
                        <SelectItem value="Friend">Friend</SelectItem>
                        <SelectItem value="Google">Google</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )} />
              </FieldGroup>

              <button type="submit" disabled={isSubmitting}
                className={`w-full btn rounded-full font-medium transition-colors ${isSubmitting
                  ? 'bg-muted/20 text-muted-foreground cursor-not-allowed'
                  : 'bg-primary text-accent-foreground hover:bg-accent hover:text-white'
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
              {error && (
                <p className="text-red-500 text-center z-20">{error}</p>
              )}
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
