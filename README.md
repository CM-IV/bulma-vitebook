# Bulma Vitebook Component Library

### By CM-IV

![](https://ci.civdev.xyz/api/badges/CM-IV/bulma-vitebook/status.svg)

**WARNING**: Only Vitejs <= v2.8.6 is working with Vitebook. If you update Vitejs to a later version, Vitebook will no longer function properly!

A Preact Component library built with Bulma CSS.

Featuring Vitest testing library on top of Vitejs.

In order to test the components in a simulated DOM, HappyDOM is used in tandem with
the preact testing library.

Husky is used with pretty-quick in order to straighten out any typos in your code once you commit.

Both the circleci and woodpeckerci engines are used. Woodpeckerci is for gitea while cicleci triggers on pushes to github.

- Components currently included:
  - Hero
  - Button
  - Card
  - Message
  - Footer
  - Level
