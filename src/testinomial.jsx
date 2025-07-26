import React, {useRef} from "react";

const testinomial = () => {
    const testimonials = [
        // Add your testimonials data here
        // Example: { id: 1, name: "John Doe", feedback: "Great service!", rating: 5 }
        {
            id: 1,
            name: "shruti sharma",
            feedback: "loved the saree collection! The quality is amazing and the designs are so elegant. Highly recommend!",
            rating: 5
        },
        {
            id: 1,
            name: "shruti sharma",
            feedback: "loved the saree collection! The quality is amazing and the designs are so elegant. Highly recommend!",
            rating: 5
        },
        {
            id: 1,
            name: "shruti sharma",
            feedback: "loved the saree collection! The quality is amazing and the designs are so elegant. Highly recommend!",
            rating: 5
        },
        {
            id: 1,
            name: "shruti sharma",
            feedback: "loved the saree collection! The quality is amazing and the designs are so elegant. Highly recommend!",
            rating: 5
        }
    ];
    const carouselRef = useRef(null);
        const scrollLeft = () => {
            carouselRef.current.scrollBy({
                left: -200,
                behavior: 'smooth'
                
            });
        };
        const scrollRight = () => {
            carouselRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        };
    return (
        <>
            <section className="p-4 space-y-5">
                <div className="bg-white rounded-2xl text-white w-full p-3 h-auto md:h-[300px] flex items-center justify-center shadow-lg">
                    <h1 className="font-bold text-black text-xl md:text-2xl">Testimonials</h1>
                </div>
                <div className="w-[100%] px-4 py-8 bg-gray-50">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">What Our Clients Say</h2>
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth px-2"
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-[280px] md:w-[320px] bg-white shadow-lg shadow-amber-900 rounded-2xl px-6 py-10 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-xl font-bold text-yellow-600">
                                    {testimonial.name[0]}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                                </div>
                                <p className="text-gray-600 mb-3">"{testimonial.feedback}"</p>
                                <p className="text-yellow-500 font-semibold">⭐ {testimonial.rating} / 5</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
}

export default testinomial;