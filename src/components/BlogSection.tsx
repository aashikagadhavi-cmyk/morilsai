import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Search, X, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

export default function BlogSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'AI Insights' | 'Workflows' | 'Engineering'>('all');
  
  // Dialog state for reading full blog post
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative py-24 bg-[#03050c] overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-950/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Research & Strategic Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            The MotusAI Intelligence Ledger
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Stay up-to-date with developer guides, regulatory compliance reviews, and strategic updates in cognitive multi-agent orchestration.
          </p>
        </div>

        {/* Search and filters controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 max-w-5xl mx-auto mb-10 pb-6 border-b border-white/5">
          {/* Categories select */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: 'All Articles' },
              { id: 'AI Insights', label: 'AI Insights' },
              { id: 'Workflows', label: 'Workflows' },
              { id: 'Engineering', label: 'Engineering' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-purple-950/40 border border-purple-500/30 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.15)]'
                    : 'bg-[#080d22] border border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search library..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#040612] border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs font-medium text-white placeholder-gray-550 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
            />
          </div>
        </div>

        {/* Empty status */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 text-gray-550 text-gray-500 italic max-w-md mx-auto">
            No insights found matching your filters. Try selecting "All Articles" or checking typos in search query.
          </div>
        )}

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#040612] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-white/20 hover:bg-[#070b1b] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 text-left group"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-3">
                  <span className="px-2.5 py-0.5 bg-purple-950/40 border border-purple-500/20 rounded text-purple-300 uppercase font-black tracking-widest">{post.category}</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-2.5 tracking-tight group-hover:text-cyan-300 transition-colors duration-250 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-450 text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Author and read time */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-950/50 border border-blue-500/25 flex items-center justify-center text-[10px] text-cyan-300 font-extrabold uppercase shrink-0">
                    {post.author.name.charAt(0)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-white block leading-none">{post.author.name}</span>
                    <span className="text-[10px] text-gray-500 block mt-0.5 leading-none">{post.author.role}</span>
                  </div>
                </div>

                <button
                  onClick={() => setReadingPost(post)}
                  className="p-1 px-2.5 rounded-lg border border-white/5 hover:border-white/10 hover:bg-white/5 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-all flex items-center gap-1"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal Reader Overlay */}
        <AnimatePresence>
          {readingPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#050816] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 md:p-8 relative text-left shadow-[0_20px_60px_rgba(0,0,0,0.9)] scrollbar-thin"
              >
                {/* Close Button tag */}
                <button
                  onClick={() => setReadingPost(null)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full border border-white/5 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Categories */}
                <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 mt-1.5">
                  <span className="px-2.5 py-0.5 bg-purple-950/40 border border-purple-500/20 rounded">{readingPost.category}</span>
                  <span className="text-gray-505 text-gray-550">•</span>
                  <span>{readingPost.readTime}</span>
                  <span>•</span>
                  <span>{readingPost.date}</span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  {readingPost.title}
                </h2>

                {/* Author attribution row */}
                <div className="flex items-center gap-3 border-b border-white/5 pb-5 mb-6.5">
                  <div className="w-9 h-9 rounded-full bg-blue-950/50 border border-blue-500/25 flex items-center justify-center font-bold text-cyan-300">
                    {readingPost.author.name.charAt(0)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{readingPost.author.name}</span>
                    <span className="text-[10px] text-gray-500 block">{readingPost.author.role} • MotusAI Engineering</span>
                  </div>
                </div>

                {/* Article body paragraphs rendered in beautiful text format */}
                <div className="text-gray-300 text-xs sm:text-sm leading-relaxed flex flex-col gap-5 font-sans">
                  {readingPost.content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('###')) {
                      return (
                        <h4 key={idx} className="text-sm sm:text-base font-bold text-white tracking-tight border-l-2 border-cyan-400 pl-3 mt-3">
                          {paragraph.replace('###', '').trim()}
                        </h4>
                      );
                    }
                    if (paragraph.startsWith('-')) {
                      return (
                        <ul key={idx} className="list-disc pl-5 flex flex-col gap-2">
                          {paragraph.split('\n').map((li, liIdx) => (
                            <li key={liIdx} className="text-gray-300">
                              {li.replace('-', '').trim()}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={idx} className="leading-6">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Bottom dialog footer spacer */}
                <div className="border-t border-white/5 pt-5.5 mt-8.5 flex justify-end">
                  <button
                    onClick={() => setReadingPost(null)}
                    className="px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-xs font-bold uppercase transition-all"
                  >
                    Close Ledger Reader
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
