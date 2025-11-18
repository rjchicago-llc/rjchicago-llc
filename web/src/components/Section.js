const classes = (...values) => values.filter(Boolean).join(' ');

export default function Section({
  id,
  title,
  description,
  background = 'bg-background',
  className = '',
  containerClassName = '',
  headingAlign = 'center',
  headingClassName = '',
  children,
}) {
  const hasHeading = title || description;

  return (
    <section id={id} className={classes('section-padding', background, className)}>
      <div className={classes('container-max', containerClassName)}>
        {hasHeading && (
          <div
            className={classes(
              'mb-16',
              headingAlign === 'center' ? 'text-center' : 'text-left',
              headingClassName
            )}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-ink-primary mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
