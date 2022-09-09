import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "@components/SectionTitle";
import axios from "axios";
import { ErrorMessage } from "@hookform/error-message";
import Button from "@components/Button";
import { toast } from "react-toastify";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // eslint-disable-next-line require-jsdoc
  async function onSubmitForm(values: any) {
    setSubmitting(true);
    const config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await toast.promise(axios(config), {
        pending: "Sending Message",
        success: {
          render({ data }) {
            return `${data?.data.message}`;
          },
        },
        error:
          "Weird! Something went wrong while sending your message.🤯 Please try again!",
      });
      if (response.status == 200) {
        reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-fit py-20 flex items-center justify-center border-b border-b-gray-300 lg:py-32"
    >
      <div className="max-w-xl w-full px-4 sm:px-0">
        <SectionTitle
          name="Contact"
          title="Have You Any Project? Please Drop A Message"
        />
        <div className="mt-10">
          <div
            id="form-container"
            className="shadow-lg p-6 rounded-lg bg-gradient-to-r from-brownPrimary/5 via-redSecondary/5 to-brownPrimary/5"
          >
            <form
              onSubmit={handleSubmit(onSubmitForm)}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  className={`block w-full shadow py-3 px-4 placeholder-gray-400 border-gray-300 rounded-md focus:outline-none ${
                    errors.name ? "ring-2 ring-red-500/50" : null
                  }`}
                  placeholder="Name *"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name must be entered!",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="name"
                  render={({ message }) => (
                    <span className="text-red-400 text-xs py-2">{message}</span>
                  )}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email address must be provided!",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address!",
                    },
                  })}
                  className={`block w-full shadow py-3 px-4 placeholder-gray-400 border-gray-300 rounded-md focus:outline-none ${
                    errors.email ? "ring-2 ring-red-500/50" : null
                  }`}
                  placeholder="Email *"
                />

                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <span className="text-red-400 text-xs py-2">{message}</span>
                  )}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <div className="mt-1 flex rounded-md shadow">
                  <span className="inline-flex items-center rounded-l-md border-r border-gray-200 bg-gray-50 px-3 text-gray-400 sm:text-sm ">
                    +91
                  </span>
                  <input
                    type="number"
                    className={`block w-full rounded-none rounded-r-md py-3 px-4 placeholder-gray-400  border-gray-300 focus:outline-none ${
                      errors.phone ? "ring-2 ring-red-500/50" : null
                    }`}
                    placeholder="Phone (Optional)"
                    {...register("phone", {
                      minLength: {
                        value: 10,
                        message: "Phone number should be of 10 digits",
                      },
                      maxLength: {
                        value: 10,
                        message: "Phone number should be of 10 digits",
                      },
                    })}
                  />
                </div>
                <ErrorMessage
                  errors={errors}
                  name="phone"
                  render={({ message }) => (
                    <span className="text-red-400 text-xs py-2">{message}</span>
                  )}
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Please enter a subject.",
                    },
                    minLength: {
                      value: 10,
                      message: "Subject should be a little longer than that!",
                    },
                    maxLength: {
                      value: 50,
                      message: "Subject should be a lesser than that!",
                    },
                  })}
                  className={`block w-full shadow py-3 px-4 placeholder-gray-400 border-gray-300 rounded-md focus:outline-none ${
                    errors.subject ? "ring-2 ring-red-500/50" : null
                  }`}
                  placeholder="Subject *"
                />
                <ErrorMessage
                  errors={errors}
                  name="subject"
                  render={({ message }) => (
                    <span className="text-red-400 text-xs py-2">{message}</span>
                  )}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  rows={4}
                  {...register("message", {
                    required: {
                      value: true,
                      message: "You need to enter your message",
                    },
                    maxLength: {
                      value: 1000,
                      message:
                        "Your message can't be more than 1000 characters",
                    },
                    minLength: {
                      value: 25,
                      message: "Your message must be longer than this!",
                    },
                  })}
                  className={`block w-full shadow py-3 px-4 placeholder-gray-400 border-gray-300 rounded-md focus:outline-none ${
                    errors.message ? "ring-2 ring-red-500/50" : null
                  }`}
                  placeholder="Message *"
                ></textarea>
                <ErrorMessage
                  errors={errors}
                  name="message"
                  render={({ message }) => (
                    <span className="text-red-400 text-xs py-2">{message}</span>
                  )}
                />
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="sm"
                  rounded={false}
                  disabled={submitting}
                  shine
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="absolute -rotate-90 -right-40 select-none hidden lg:inline-block"
        style={{ zIndex: -1 }}
      >
        <span className="text-8xl font-extrabold text-gray-100 uppercase inline-block">
          CONTACT
        </span>
      </div>
    </section>
  );
};

export default Contact;
