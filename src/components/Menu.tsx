"use client";

import { useState } from "react";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
  protein_options?: string[];
}

const menuCategories: MenuCategory[] = [
  {
    name: "Appetizers",
    items: [
      { name: "Veggie Spring Roll", description: "Spring roll wrap, shredded cabbage, carrot, and onion served with sweet chili sauce", price: "$5.95" },
      { name: "Fresh Roll", description: "Rice paper wrap, shrimp tofu basil leaves, lettuce & carrot served with plum sauce & peanut sauce", price: "$8.95" },
      { name: "Steamed Dumpling", description: "Marinated minced pork, shrimp, & secret ingredients served with homemade dark sauce", price: "$7.95" },
      { name: "Crab Rangoon", description: "Crab meat, cream cheese, and hint of curry in crispy pastry wrapped served with plum sauce", price: "$6.95" },
      { name: "Tempura Calamari", description: "Crispy fried calamari served with plum sauce", price: "$7.95" },
      { name: "Fried Tofu Dips", description: "Deep fried tofu served with plum sauce & topped with crushed peanuts", price: "$7.95" },
      { name: "Chicken Satay", description: "Marinated grilled chicken on skewers served with peanut sauce and cucumber relish", price: "$11.95" },
      { name: "Chicken Lettuce Wraps", description: "Minced chicken, garlic, bell pepper, onion, carrot and scallion served with lettuce cup and peanut sauce", price: "$10.95" },
      { name: "Edamame", description: "Steamed soy bean tossed with sea salt", price: "$5.95" },
      { name: "Pot Stickers", price: "$7.95" },
    ],
  },
  {
    name: "Fried Rice",
    items: [
      { name: "Thai Fried Rice", description: "Stir-fried jasmine rice with egg, broccoli, carrot and onion", price: "$15.95-$27.95" },
      { name: "Spicy Basil Fried Rice", description: "Stir-fried jasmine rice with bell pepper, carrot, onion, Thai chili and basil leaves", price: "$15.95-$27.95" },
      { name: "Green Curry Fried Rice", description: "Stir-fried jasmine rice with green curry paste, bell pepper, green bean, bamboo shoot and basil leaves", price: "$15.95-$27.95" },
      { name: "Red Curry Fried Rice", description: "Stir-fried jasmine rice with red curry paste, bell pepper, green bean, bamboo shoot and basil leaves", price: "$15.95-$27.95" },
      { name: "Tom Yum Fried Rice", description: "Stir-fried jasmine rice with fresh Thai herbs & spices, bell pepper, carrot, onion and basil leaves", price: "$15.95-$27.95" },
      { name: "Pineapple Fried Rice", description: "Stir-fried jasmine rice with egg, pineapple, roasted cashew nut, raisin, carrot, onion with a hint of curry flavor", price: "$15.95-$27.95" },
    ],
    protein_options: ["Chicken ($15.95)", "Shrimp ($16.95)", "Tofu ($15.95)", "Mixed Vegetables ($15.95)", "Beef ($16.95)", "Pork ($15.95)", "Squid ($16.95)", "Scallops ($16.95)", "Fish Fillet ($26.95)", "Duck ($27.95)", "Soft Shell ($27.95)"],
  },
  {
    name: "Noodle Dishes",
    items: [
      { name: "Pad Thai", description: "Stir-fried thin rice noodles with egg, bean sprout, scallion, & crushed peanut", price: "$15.95-$27.95" },
      { name: "Woon Sen Pad Thai", description: "Stir-fried beanthread noodles with egg, bean sprout, scallion, & crushed peanut", price: "$15.95-$27.95" },
      { name: "Pad See Ew", description: "Stir-fried wide ribbon rice noodles with egg, broccoli, & carrot", price: "$15.95-$27.95" },
      { name: "Drunken Noodle", description: "Stir-fried wide ribbon rice noodles with bell pepper, onion, green bean, carrot, Thai chili, & basil leaves", price: "$15.95-$27.95" },
      { name: "Pad Woon Sen", description: "Stir-fried beanthread noodles with egg and mixed vegetables", price: "$15.95-$27.95" },
      { name: "Rad Nah", description: "Stir-fried wide ribbon rice noodles with eggs, bean sprouts and scallions", price: "$15.95-$27.95" },
      { name: "Thai Noodle Soup", price: "$15.95-$27.95" },
    ],
    protein_options: ["Chicken ($15.95)", "Shrimp ($16.95)", "Tofu ($15.95)", "Mixed Vegetables ($15.95)", "Beef ($16.95)", "Pork ($15.95)", "Squid ($16.95)", "Scallops ($16.95)", "Fish Fillet ($26.95)", "Duck ($27.95)", "Soft Shell ($27.95)"],
  },
  {
    name: "Sauteed Dishes",
    items: [
      { name: "Cashew Nut", price: "$15.95-$27.95" },
      { name: "Garlic & Black Pepper", price: "$15.95-$27.95" },
      { name: "Ginger", price: "$15.95-$27.95" },
      { name: "Pad Ka Proa", description: "Thai basil leaves, bell pepper, onions, green bean, & Thai chopped chili", price: "$15.95-$27.95" },
      { name: "Sweet & Sour", description: "Thai style with tomato, cucumber, bell pepper, onion, pineapple, & scallion", price: "$15.95-$27.95" },
      { name: "Amazing", price: "$15.95-$27.95" },
    ],
    protein_options: ["Chicken ($15.95)", "Shrimp ($16.95)", "Tofu ($15.95)", "Mixed Vegetables ($15.95)", "Beef ($16.95)", "Pork ($15.95)", "Squid ($16.95)", "Scallops ($16.95)", "Fish Fillet ($26.95)", "Duck ($27.95)", "Soft Shell ($27.95)"],
  },
  {
    name: "Curry Dishes",
    items: [
      { name: "Red Curry", description: "Bell pepper, bamboo shoot, green bean, & Thai basil leaves, cooked in coconut milk with red curry paste", price: "$15.95-$27.95" },
      { name: "Green Curry", description: "Bell pepper, bamboo shoot, green bean, & Thai basil leaves cooked in coconut milk with green curry paste", price: "$15.95-$27.95" },
      { name: "Massaman Curry", description: "Potatoes, onion, carrot, and roasted peanuts cooked in coconut milk with massaman curry paste", price: "$15.95-$27.95" },
      { name: "Panang Curry", description: "Bell pepper, green bean, zucchini & fresh ground peanut cooked in coconut milk with panang curry paste", price: "$15.95-$27.95" },
      { name: "Yellow Curry", description: "Potatoes, onions, carrot and tomato, cooked in coconut milk with yellow curry paste", price: "$15.95-$27.95" },
    ],
    protein_options: ["Chicken ($15.95)", "Shrimp ($16.95)", "Tofu ($15.95)", "Mixed Vegetables ($15.95)", "Beef ($16.95)", "Pork ($15.95)", "Squid ($16.95)", "Scallops ($16.95)", "Fish Fillet ($26.95)", "Duck ($27.95)", "Soft Shell ($27.95)"],
  },
  {
    name: "Vegetarian",
    items: [
      { name: "Eggplant Panang", description: "Crispy fried eggplant over panang curry sauce and mixed vegetables", price: "$16.95" },
      { name: "Thai Basil Eggplant", description: "Stir-fried eggplant with Thai basil, salted soya bean, garlic & fresh chili", price: "$16.95" },
      { name: "Amazing Eggplant", description: "Crispy fried eggplant with a bed of mixed vegetables topped with amazing peanut sauce", price: "$16.95" },
      { name: "Fancy Tofu", description: "Lightly fried tofu and a bed of mixed vegetables topped with Thai style sweet & sour sauce", price: "$15.95" },
    ],
  },
  {
    name: "Signature Dishes",
    items: [
      { name: "Pad Ka Prao Moo Sub", description: "Popular street food dish Thai style of stir-fried minced pork with fresh chili & Thai basil served with fried egg over steamed jasmine rice", price: "$16.95" },
      { name: "Pad Ped Duck", description: "Stir-fried spicy chili paste with bell pepper, green bean, kaffir lime leaves, & Thai basil over crispy fried duck", price: "$27.95" },
      { name: "Pad Ped Talay", description: "Stir-fried shrimp, scallop, squid, with spicy chili paste, bell pepper, green bean, kaffir lime leaves, & Thai basil", price: "$27.95" },
      { name: "Chu Chee Talay", description: "Shrimp, scallop, squid topped with Chu Chee curry sauce and a side of mixed vegetables", price: "$27.95" },
      { name: "Crispy Roasted Duck", description: "Well-seasoned crispy fried duck topped with roasted brown sauce over a bed of mixed vegetables", price: "$27.95" },
      { name: "Fancy Duck", description: "Crispy fried duck topped with Thai style sweet & sour sauce over a bed of mixed vegetables", price: "$27.95" },
      { name: "Pad Eggplant Moo Sub", description: "Stir-fried eggplant & minced pork with Thai basil, salted soya bean, garlic & fresh chili", price: "$16.95" },
      { name: "Palm Thai Soft Shell Crab", description: "Crispy soft shell crab and shrimp on a bed of mixed vegetables topped with creamy avocado green curry sauce", price: "$27.95" },
      { name: "Chu Chee Crispy Duck", description: "Crispy duck topped with Chu Chee curry sauce and a side of mixed vegetables with kaffir lime leaves", price: "$27.95" },
      { name: "Khao Soi Chicken", description: "Northern Thai Egg Noodle Curry - secret curry paste recipe, bean sprout, crispy fried shallots, roasted chili oil, & lime wedge topped with crispy wonton strips over egg noodles", price: "$15.95" },
      { name: "Crispy Duck Noodles Soup", description: "Egg noodle with bean sprouts, scallions and a touch of toasted garlic in special broth", price: "$17.95" },
    ],
  },
  {
    name: "Soups",
    items: [
      { name: "Tom Kha Soup", description: "Coconut broth, mushroom, bell pepper, shallot, cilantro, scallion, fresh lime juice and flavored with galangal, lemongrass, & kaffir lime leaves", price: "$6.50" },
      { name: "Tom Yum Soup", description: "Savory traditional soup with chicken, spiced with exotic Thai herbs, mushroom, bell pepper, shallot, cilantro, scallion, & fresh lime juice", price: "$6.50" },
      { name: "Wonton Soup", description: "Wonton skin stuffed with well-seasoned pork & shrimp, bean sprout, cilantro, scallion, and a touch of toasted garlic in clear broth", price: "$5.50" },
      { name: "Vegetable Soup", description: "Mixed vegetables, cilantro, scallion and a touch of toasted garlic in clear broth", price: "$5.95" },
      { name: "Miso Soup", description: "Cubed soft tofu, seaweed, & scallion in miso broth", price: "$5.95" },
      { name: "Jasmine Rice Soup", description: "Chicken and jasmine rice in savory clear broth, cilantro, scallion and a touch of toasted garlic", price: "$5.95" },
    ],
  },
  {
    name: "Salads",
    items: [
      { name: "House Salad", description: "Lettuce, carrot, tomato, and purple cabbage topped with house dressing", price: "$5.95" },
      { name: "Larb", description: "Choice of chopped chicken or pork, red onion, scallion, & roasted rice powder tossed in roasted chili lime dressing", price: "$10.95" },
      { name: "Namsod", description: "Minced pork spiced with fresh ginger, red onion, cilantro, scallion, chili & roasted peanut tossed in lime dressing", price: "$10.95" },
      { name: "Yum Beef", description: "Sliced grilled beef, red onion, scallion, roasted rice powder tossed in roasted chili lime dressing", price: "$12.95" },
      { name: "Papaya Salad", description: "Shredded green papaya, green beans, carrots, tomatoes, fresh chili, shrimp and roasted peanuts mixed in lime dressing", price: "$12.95" },
    ],
  },
  {
    name: "Side Orders",
    items: [
      { name: "Jasmine Rice", price: "$3.00" },
      { name: "Egg Fried Rice", price: "$5.50" },
      { name: "Sticky Rice", price: "$3.00" },
      { name: "Steamed Noodles", price: "$3.00" },
      { name: "Extra Chicken", price: "$3.50" },
      { name: "Extra Shrimp", price: "$3.50" },
      { name: "Any Side of Entree Sauce", price: "$4.00" },
      { name: "Extra Beef", price: "$4.00" },
      { name: "Extra Pork", price: "$4.00" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Crispy Banana", description: "Wrapped with rice paper served with honey & sesame seed", price: "$6.95" },
      { name: "Thai Donuts", price: "$7.95" },
      { name: "Mango and Sticky Rice", price: "$8.95" },
    ],
  },
  {
    name: "Beverages",
    items: [
      { name: "Coke/Diet Coke/Sprite", price: "$2.00" },
      { name: "Unsweetened Iced Tea", price: "$2.50" },
      { name: "Thai Iced Tea", price: "$4.50" },
      { name: "Thai Iced Coffee", price: "$4.50" },
      { name: "Apple Juice", price: "$4.00" },
      { name: "Perrier", price: "$2.50" },
      { name: "Bottled Water", price: "$1.50" },
      { name: "Hot Tea (Jasmine/Green)", price: "$2.50" },
      { name: "Lemonade Juice", price: "$4.00" },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);
  const currentCategory = menuCategories[activeCategory];

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Our Menu
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-primary mb-4">
            Authentic Thai Flavors
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            81 dishes across 12 categories, made fresh with authentic Thai recipes
          </p>
        </div>

        {/* Lunch Special Banner */}
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 sm:p-6 mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="bg-primary text-text-on-primary text-xs font-bold px-3 py-1 rounded-full">
              LUNCH SPECIAL
            </span>
            <span className="text-text-secondary text-sm">Mon-Fri</span>
          </div>
          <p className="font-heading text-2xl sm:text-3xl text-text-primary">
            Chicken Pad Thai or Fried Rice
          </p>
          <p className="text-text-secondary mt-1">
            with Grandma&apos;s Eggroll &amp; Soup of the Day
          </p>
          <p className="text-primary font-bold text-2xl mt-2">$8.95</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {menuCategories.map((cat, index) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === index
                  ? "menu-tab-active"
                  : "menu-tab-inactive"
              }`}
            >
              {cat.name}
              <span className="ml-1.5 text-xs opacity-60">
                ({cat.items.length})
              </span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-1">
          {currentCategory.items.map((item, index) => (
            <div
              key={item.name}
              className={`flex items-start justify-between p-4 rounded-lg transition-colors ${
                index % 2 === 0 ? "bg-surface" : "bg-background"
              } hover:bg-section-alt-bg/50`}
            >
              <div className="flex-1 pr-4">
                <h3 className="font-heading text-xl text-text-primary">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
              <span className="text-primary font-bold text-base whitespace-nowrap mt-1">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        {/* Protein Options */}
        {currentCategory.protein_options && (
          <div className="mt-6 p-4 sm:p-6 bg-section-alt-bg rounded-xl">
            <h4 className="font-body font-bold text-text-primary mb-3">
              Choose Your Protein:
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentCategory.protein_options.map((option) => (
                <span
                  key={option}
                  className="text-sm text-text-secondary bg-surface px-3 py-1.5 rounded-full"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Dietary Note */}
        <div className="mt-6 text-center text-text-secondary text-sm">
          <p>Vegetarian options available. Tofu substitution available on most dishes.</p>
        </div>
      </div>
    </section>
  );
}
