// components/CategorySection.tsx
import CategoryCard, { CategoryCardProps } from "../cards/CategoryCard";

const CATEGORIES: CategoryCardProps[] = [
  {
    title: "Dry Fruits",
    subtitle: "Explore Variety",
    imageSrc: "/category-img-1.png", // Replace with your image
    href: "/category/dry-fruits",
  },
  {
    title: "Essential Oils",
    subtitle: "Browse Collection",
    imageSrc: "/category-img-2.png", // Replace with your image
    href: "/category/essential-oils",
  },
  {
    title: "Shilajeet",
    subtitle: "Ancient Energy",
    imageSrc: "/category-img-3.png", // Replace with your image
    href: "/category/shilajeet",
  },
];

export default function CategorySection() {
  return (
    <section className="w-full bg-[#fcf9f6] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Flex Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((category, idx) => (
            <CategoryCard
              key={idx}
              title={category.title}
              subtitle={category.subtitle}
              imageSrc={category.imageSrc}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
