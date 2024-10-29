declare module "gsap/all" {
  export * from "gsap";
  export * from "gsap/ScrollTrigger";
  export * from "gsap/core";
  export * from "gsap/gsap-core";
  export * from "gsap/gsap-bonus";
}

declare module "gsap/ScrollTrigger" {
  interface ScrollTrigger {
    wrapping?: boolean; // Add the wrapping property here
    create: (...args: any[]) => any;
  }
}

declare module "gsap/ScrollTrigger" {
  interface ScrollTrigger {
    create: (...args: any[]) => any; // Define the parameters and return type as needed
  }
}
