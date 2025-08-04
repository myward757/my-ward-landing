import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  Trophy,
  ArrowRight,
  Heart,
  Clock,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EventsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleClosePreview = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={handleClosePreview}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[calc(100vw-2rem)] sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl px-4"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={handleClosePreview}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
              <motion.img
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                src={selectedImage}
                alt="Preview"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto max-sm:px-4  px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-deep-blue mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the Movement for{" "}
            <span className="text-soft-blue">Balanced Screen Time</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At My Ward, we believe true connection goes beyond screens. Our
            events and challenges are more than activities — they’re shared
            moments that spark joy, build trust, and bring the heart of the
            community back to life.
          </motion.p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Digital Detox Challenge */}
          <motion.div
            className="relative group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => handleImageClick("images/OLE00006.JPG")}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="images/OLE00006.JPG"
                alt="Digital Detox Challenge"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-2 text-white mb-4">
                    <Calendar className="w-5 h-5" />
                    <span className="text-xs font-medium">7-Day Journey</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Community Help Desk — Open Hour
                  </h3>
                  <p className="text-white/90 mb-3 text-sm">
                    An open help desk where citizens can walk in, ask questions,
                    or seek guidance on local matters, schemes, or community
                    events.
                  </p>
                  <div className="flex items-center text-white text-sm font-medium">
                    <Trophy className="w-5 h-5 mr-2" />
                    <span>Celebrate your digital wellness journey</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Expert Webinars */}
          <motion.div
            className="relative group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => handleImageClick("images/OLE00198.JPG")}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="images/OLE00198.JPG"
                alt="Expert Webinars"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-2 text-white mb-4">
                    <Users className="w-5 h-5" />
                    <span className="text-xs font-medium">Expert Insights</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Digital Wellness Webinars
                  </h3>
                  <p className="text-white/90 mb-3 text-sm">
                    Join leading psychologists and digital wellness experts as
                    they share insights on creating healthy tech habits for the
                    whole family.
                  </p>
                  <div className="flex items-center text-white text-sm font-medium">
                    <Star className="w-5 h-5 mr-2" />
                    <span>Learn from the best in digital wellness</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Community Stories */}
          <motion.div
            className="relative group md:col-span-2 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => handleImageClick("images/OLE00142.JPG")}
          >
            <div className="aspect-[16/6] max-sm:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="images/OLE00142.JPG"
                alt="Community Stories"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-2 text-white mb-4">
                    <Heart className="w-5 h-5" />
                    <span className="text-xs font-medium">
                      Heartwarming Stories
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Tech Wonders: Exploring the Future with AI Tools
                  </h3>
                  <p className="text-white/90 mb-3 max-w-3xl text-sm">
                    Discover how modern technology and powerful AI tools are
                    transforming the way we live, work, and connect. In this
                    hands-on session, we’ll explore fun, useful, and surprising
                    tools that anyone can use — no tech background needed!
                  </p>
                  <div className="flex items-center text-white text-sm font-medium">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Time well spent, memories well made</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-deep-blue to-soft-blue rounded-2xl p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Warm & Inviting
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Thousands are finding balance with technology — spending less time
              scrolling and more time living. Start your journey toward a
              healthier, happier digital life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-deep-blue hover:bg-white/90"
              >
                Join Our Next Event
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/10"
              >
                Download My Ward
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
