import Action from './Action.astro'
import FeatureSpotlight from './FeatureSpotlight.astro'
import Hero from './Hero.astro'

export const registry: Record<string, (props: { block: any }) => unknown> = {
  action: Action,
  featureSpotlight: FeatureSpotlight,
  hero: Hero,
}
