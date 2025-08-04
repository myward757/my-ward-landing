import { AlertTriangle, Smartphone } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 max-sm:pb-0 bg-off-white">
      <div className="container mx-auto max-sm:px-4 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-6">
            The Real Problem Our Communities Face
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Traditional ways of spreading information — like WhatsApp groups and
            printed notices — are no longer enough. Updates get buried, voices
            are ignored, and our neighborhoods slowly lose their connection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem Image */}
          <div className="slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-light-blue">
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  {/* Old Way */}
                  <div className="text-center p-6 bg-gray-100 rounded-xl">
                    <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-orange-500" />
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Traditional Information Board
                    </h4>
                    <p className="text-sm text-gray-600">
                      Once a community voice, now lost to time.
                    </p>
                  </div>

                  {/* New Way */}
                  <div className="text-center p-6 bg-gradient-to-br from-pale-blue to-light-blue rounded-xl">
                    <Smartphone className="h-12 w-12 mx-auto mb-4 text-white" />
                    <h4 className="font-semibold text-white mb-2">
                      My Ward App
                    </h4>
                    <p className="text-sm text-white opacity-90">
                      Real-time, everyone connected
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Description */}
          <div className="slide-in-right">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Information Gaps
                  </h3>
                  <p className="text-gray-600">
                    Too often, the most important local updates go unheard.
                    While help exists, many remain in the dark — unaware of
                    government benefits, emergency alerts, or community events
                    that could change their lives.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Lack of Participation
                  </h3>
                  <p className="text-gray-600">
                    Many citizens feel unheard and invisible. Without a trusted
                    platform, they’re left unable to raise their voice, share
                    ideas, or even stay informed about what’s happening in their
                    own ward.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Disconnected Communities
                  </h3>
                  <p className="text-gray-600">
                    Villages have always thrived on tradition, trust, and
                    togetherness — but in today’s world, without digital tools,
                    that spirit slowly fades. Neighbours turn into strangers,
                    and the heartbeat of the community begins to quiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
