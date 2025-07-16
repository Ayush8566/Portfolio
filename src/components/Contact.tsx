export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to work together? Let's create something amazing!
          </p>
          
          <div className="flex justify-center">
            <a 
              href="mailto:kumarayush59567@gmail.com" 
              className="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-lg hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-2xl">📧</span>
              <span className="text-lg font-semibold">kumarayush59567@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};