type TitleProps = {
  title: string;
  subtitle: string;
};

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="mx-auto max-w-screen-sm px-2 text-center">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-secondary-foreground">
        {title}
      </h2>

      <p className="mb-8 font-light text-muted-foreground sm:text-xl lg:mb-16">
        {subtitle}
      </p>
    </div>
  );
}
