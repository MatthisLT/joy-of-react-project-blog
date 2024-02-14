/**
 * `dynamic` was used to avoid that every MDX Components were loaded on every
 * time we use MDX as content. But it seems that even without `dynamic` if a
 * component is not included in MDX, no extra code will be included in the
 * markup or client code.
 *
 * And as the use of dynamic was causing type issues when use in COMPONENTS_MAP,
 * it's been commented.
 *
 * But it was also use to comply "provider / subscriber" behavior. Now the
 * "subscriber" will have the full responsability to lazy load it or not in other use cases.
 * */

// import dynamic from 'next/dynamic';

// const CircularColorsDemo = dynamic(
//   () => import('./CircularColorsDemo')
// );

// export default CircularColorsDemo;

export * from './CircularColorsDemo';
export { default } from './CircularColorsDemo';
