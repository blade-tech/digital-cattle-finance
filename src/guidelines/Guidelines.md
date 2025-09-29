# ZEROH Livestock Investment Platform Guidelines

## Critical Layout Rules

### ✅ MODAL AND DETAIL VIEW LAYOUTS (ALWAYS FOLLOW THIS)

**All modal popups and detail views must use VERTICAL layouts for multiple metrics to prevent visual crowding:**

#### Correct Pattern:
```jsx
<div className="space-y-4">
  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
    <div>
      <p className="text-sm text-black/60 mb-1">Metric Label</p>
      <p className="text-2xl font-bold text-green-600">{value}</p>
    </div>
    <div className="text-right">
      <p className="text-xs text-green-600">Additional Info</p>
    </div>
  </div>
  {/* Repeat for each metric */}
</div>
```

#### ❌ NEVER USE horizontal grids in modals:
```jsx
// DON'T USE THIS - causes visual bugs
<div className="grid grid-cols-6 lg:grid-cols-10 gap-4">
  <div className="text-center p-3 bg-green-50 rounded-lg">...</div>
</div>
```

### Main Dashboard Grids (Still OK):
Standard responsive grids for main content areas are fine:
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {/* Dashboard cards */}
</div>
```

## General Guidelines

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files
* Do not use Tailwind classes for font size, font weight, or line-height unless specifically requested (use default typography from globals.css)

## Design System Guidelines

* Date formats should always be in the format "Apr 15" or "April 15, 2025"
* Use green-600 for main actions and positive indicators
* Financial data: Green for profits/gains, red for expenses/losses, blue for neutral metrics
* Status indicators: Green for success, orange for warning, red for error, blue for info
* Background tints: Use 50-level colors (green-50, blue-50) for subtle backgrounds
<!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

* Use a base font-size of 14px
* Date formats should always be in the format “Jun 10”
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized
-->
