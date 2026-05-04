import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiPlus,
  FiRefreshCw,
  FiTrash2,
  FiEdit3,
  FiMail,
  FiGithub,
  FiExternalLink,
  FiCheckCircle,
  FiXCircle,
  FiGrid,
  FiLayers,
  FiBriefcase,
  FiInbox,
} from 'react-icons/fi';

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-gray-50/70 dark:bg-gray-800/70 border border-gray-200/70 dark:border-gray-700/70 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 dark:text-white outline-none transition';

const splitCsv = (value) =>
  value
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);



const Admin = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [otherProjects, setoProjects] = useState([]);
  const [offers, setOffers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [activeSection, setActiveSection] = useState('projects');

   useEffect(() => {
    fetch("https://myprortfolio.onrender.com/api/featured/")   
      .then((res) => res.json())
      .then((data) => {
        console.log("Projects from backend:", data); 
        setProjects(data);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

   useEffect(() => {
    fetch("https://myprortfolio.onrender.com/api/other-projects/")   
      .then((res) => res.json())
      .then((data) => {
        console.log("Projects from backend:", data); 
        setoProjects(data);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

    useEffect(()=>{
    fetch("https://myprortfolio.onrender.com/apis/tech/")
    .then((res)=>res.json())
    .then((data)=>{
      setOffers(data);
    })
    .catch((error)=> console.log("error while fetching tech:",error));
  },[]);

    useEffect(() => {
    fetch("https://myprortfolio.onrender.com/apic/message/")   
      .then((res) => res.json())
      .then((data) => {
        console.log("Projects from backend:", data); 
        setMessages(data);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const [projectForm, setProjectForm] = useState({
    id: null,
    title: '',
    description: '',
    image: null,
    tech: '',
    highlights: '',
    github_link: '',
    live_link: '',
  });

  const [otherForm, setOtherForm] = useState({
    id: null,
    title: '',
    description: '',
    tech: '',
    icon_name: '',
    link: '',
  });

  const [offerForm, setOfferForm] = useState({
    id: null,
    title: '',
    Description: '',
    my_skills: '',
    Icon: '',
    Status: true,
  });

  const nextId = () => Date.now() + Math.floor(Math.random() * 1000);
  

  const refreshAll = () => {
    setLoading(true);
    setTimeout(() => {
      setProjects(projects);
      setoProjects(otherProjects);
      setOffers(offers);
      
      setLoading(false);
    }, 350);
  };

 const handleProjectSubmit = async (e) => {
  e.preventDefault();

  const isEditing = Boolean(projectForm.id);
  const formData = new FormData();

  formData.append('title', projectForm.title || 'Untitled project');
  formData.append('description', projectForm.description);
  formData.append('tech', JSON.stringify(splitCsv(projectForm.tech)));
  formData.append('highlights', JSON.stringify(splitCsv(projectForm.highlights)));
  formData.append('github_link', projectForm.github_link);
  formData.append('live_link', projectForm.live_link);

  if (projectForm.image) {
    formData.append('image', projectForm.image);
  }

  try {
    const res = await fetch(
      isEditing
        ? `https://myprortfolio.onrender.com/api/featured/${projectForm.id}/`
        : `https://myprortfolio.onrender.com/api/featured/`,
      {
        method: isEditing ? 'PATCH' : 'POST', // ✅ PATCH is safer
        body: formData, // ❌ no Content-Type header
      }
    );

    if (!res.ok) {
      const errorData = await res.json(); // 👈 SEE REAL ERROR
      console.error(errorData);
      throw new Error('Failed to save project');
    }

    const saved = await res.json();

    setProjects((prev) =>
      isEditing
        ? prev.map((p) => (p.id === saved.id ? saved : p))
        : [...prev, saved]
    );

    setProjectForm({
      id: null,
      title: '',
      description: '',
      image: null,
      tech: '',
      highlights: '',
      github_link: '',
      live_link: '',
    });
  } catch (err) {
    console.error('Project submit error:', err);
  }
};


const handleProjectEdit = (item) => {
  setProjectForm({
    id: item.id,
    title: item.title || '',
    description: item.description || '',
    image: null, // IMPORTANT: do not set URL here
    tech: Array.isArray(item.tech) ? item.tech.join(', ') : '',
    highlights: Array.isArray(item.highlights)
      ? item.highlights.join(', ')
      : '',
    github_link: item.github_link || '',
    live_link: item.live_link || '',
  });

  setImagePreview(item.image || null); // ✅ now defined
};

  const deleteProject = async (id) => {
     const token = localStorage.getItem("access");

      await fetch(`https://myprortfolio.onrender.com/api/featured/${id}/`, {
        method: "DELETE",
        headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

const handleOtherSubmit = async (e) => {
  e.preventDefault();

  const isEditing = Boolean(otherForm.id); // ✅ define once

  const payload = {
    title: otherForm.title || 'Untitled project',
    description: otherForm.description,
    tech: splitCsv(otherForm.tech),
    icon_name: otherForm.icon_name || 'HiOutlineSparkles',
    link: otherForm.link,
  };

  try {
    const res = await fetch(
      isEditing
        ? `https://myprortfolio.onrender.com/api/other-projects/${otherForm.id}/`
        : `https://myprortfolio.onrender.com/api/other-projects/`,
      {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) throw new Error('Failed to save project');

    const saved = await res.json();

    setoProjects((prev) =>
      isEditing
        ? prev.map((p) => (p.id === saved.id ? saved : p))
        : [...prev, saved]
    );

    setOtherForm({
      id: null,
      title: '',
      description: '',
      tech: '',
      icon_name: '',
      link: '',
    });
  } catch (err) {
    console.error('Project submit error:', err);
  }
};


  const handleOtherEdit = (item) => {
    setOtherForm({
      id: item.id,
      title: item.title || '',
      description: item.description || '',
      tech: Array.isArray(item.tech) ? item.tech.join(', ') : '',
      icon_name: item.icon_name || '',
      link: item.link || '',
    });
  };

  const deleteOtherProject = async(id) => {
    const token = localStorage.getItem("access");

      await fetch(`https://myprortfolio.onrender.com/api/other-projects/${id}/`, {
        method: "DELETE",
        headers: {
        Authorization: `Bearer ${token}`,
        },
      });
    setoProjects((prev) => prev.filter((p) => p.id !== id));
  };

const handleOfferSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    title: offerForm.title || 'New service',
    description: offerForm.Description,
    my_skills: splitCsv(offerForm.my_skills),
    icon: offerForm.Icon,
    status: offerForm.Status,
  };

  const isEditing = Boolean(offerForm.id);

  try {
    const res = await fetch(
      isEditing
        ? `https://myprortfolio.onrender.com/apis/tech/${offerForm.id}/`
        : `https://myprortfolio.onrender.com/apis/tech/`,
      {
        method: isEditing ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) throw new Error('Failed to save offer');

    const saved = await res.json();

    setOffers((prev) =>
      isEditing
        ? prev.map((p) => (p.id === saved.id ? saved : p))
        : [...prev, saved]
    );

    setOfferForm({
      id: null,
      title: '',
      Description: '',
      my_skills: '',
      Icon: '',
      Status: true,
    });
  } catch (err) {
    console.error('Offer submit error:', err);
  }
};
 const handleOfferEdit = (item) => {
  setOfferForm({
    id: item.id,
    title: item.title || '',
    Description: item.description || '',   // 👈 from backend
    my_skills: Array.isArray(item.my_skills)
      ? item.my_skills.join(', ')
      : '',
    Icon: item.icon || '',                  // 👈 from backend
    Status: Boolean(item.status),            // 👈 from backend
  });
}; 
  const deleteOffer = async(id) => {
    const token = localStorage.getItem("access");

      await fetch(`https://myprortfolio.onrender.com/apis/tech/${id}/`, {
        method: "DELETE",
        headers: {
        Authorization: `Bearer ${token}`,
        },
      });
    setOffers((prev) => prev.filter((p) => p.id !== id));
  };

    const deleteMessage = async (id) => {
      const token = localStorage.getItem("access");

      await fetch(`https://myprortfolio.onrender.com/apic/messages/${id}/delete/`, {
        method: "DELETE",
        headers: {
        Authorization: `Bearer ${token}`,
        },
      });

          // remove from UI instantly
          setMessages((prev) => prev.filter((m) => m.id !== id));
        };

  const sectionCard = (title, accent, children, action) => (
    <div className="relative bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl border border-gray-200/60 dark:border-gray-700/60 shadow-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className={`text-sm font-semibold ${accent}`}>Admin Panel</p>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </div>
  );

  const renderSection = () => {
    if (activeSection === 'projects') {
      return sectionCard(
        'Featured Projects',
        'text-blue-600 dark:text-blue-400',
        <div className="grid lg:grid-cols-2 gap-6">
          <form onSubmit={handleProjectSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                required
                value={projectForm.title}
                onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                className={inputClass}
                placeholder="Title"
              />
             <input
                type="file"
                accept="image/*"
                className={inputClass}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;

                  setProjectForm((prev) => ({
                    ...prev,
                    image: file, // ✅ File object
                  }));

                  setImagePreview(URL.createObjectURL(file)); // ✅ preview
                }}
              />
            </div>
            <textarea
              required
              value={projectForm.description}
              onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
              className={`${inputClass} min-h-[110px]`}
              placeholder="Description"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <input
                value={projectForm.tech}
                onChange={(e) => setProjectForm({ ...projectForm, tech: e.target.value })}
                className={inputClass}
                placeholder="Tech (comma separated)"
              />
              <input
                value={projectForm.highlights}
                onChange={(e) => setProjectForm({ ...projectForm, highlights: e.target.value })}
                className={inputClass}
                placeholder="Highlights (comma separated)"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                value={projectForm.github_link}
                onChange={(e) => setProjectForm({ ...projectForm, github_link: e.target.value })}
                className={inputClass}
                placeholder="GitHub link"
              />
              <input
                value={projectForm.live_link}
                onChange={(e) => setProjectForm({ ...projectForm, live_link: e.target.value })}
                className={inputClass}
                placeholder="Live link"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              {projectForm.id ? <FiEdit3 /> : <FiPlus />}
              {projectForm.id ? 'Update Project' : 'Add Project'}
            </button>
          </form>

          <div className="space-y-4 max-h-[620px] overflow-y-auto pr-2">
            {projects.map((project) => (
              <div
                key={project.id || project.title}
                className="p-4 rounded-2xl border border-gray-200/70 dark:border-gray-700/70 bg-white/60 dark:bg-gray-800/70 flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleProjectEdit(project)}
                      className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300"
                      aria-label="Edit project"
                    >
                      <FiEdit3 />
                    </button>
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-300"
                      aria-label="Delete project"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(project.tech || []).map((item, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-sm text-blue-600 dark:text-blue-300">
                  {project.github_link && (
                    <a href={project.github_link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                      <FiGithub /> Code
                    </a>
                  )}
                  {project.live_link && (
                    <a href={project.live_link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                      <FiExternalLink /> Live
                    </a>
                  )}
                </div>
              </div>
            ))}
            {projects.length === 0 && (
              <div className="p-4 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
                No projects yet — add one to get started.
              </div>
            )}
          </div>
        </div>,
      );
    }

    if (activeSection === 'other-projects') {
      return sectionCard(
        'Other Projects',
        'text-purple-600 dark:text-purple-400',
        <div className="grid lg:grid-cols-2 gap-6">
          <form onSubmit={handleOtherSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                required
                value={otherForm.title}
                onChange={(e) => setOtherForm({ ...otherForm, title: e.target.value })}
                className={inputClass}
                placeholder="Title"
              />
              <input
                value={otherForm.icon_name}
                onChange={(e) => setOtherForm({ ...otherForm, icon_name: e.target.value })}
                className={inputClass}
                placeholder="Icon name (HiOutlineSparkles)"
              />
            </div>
            <textarea
              required
              value={otherForm.description}
              onChange={(e) => setOtherForm({ ...otherForm, description: e.target.value })}
              className={`${inputClass} min-h-[110px]`}
              placeholder="Description"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <input
                value={otherForm.tech}
                onChange={(e) => setOtherForm({ ...otherForm, tech: e.target.value })}
                className={inputClass}
                placeholder="Tech (comma separated)"
              />
              <input
                required
                value={otherForm.link}
                onChange={(e) => setOtherForm({ ...otherForm, link: e.target.value })}
                className={inputClass}
                placeholder="Project link"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              {otherForm.id ? <FiEdit3 /> : <FiPlus />}
              {otherForm.id ? 'Update Other Project' : 'Add Other Project'}
            </button>
          </form>

          <div className="space-y-4 max-h-[520px] overflow-y-auto pr-2">
            {otherProjects.map((project) => (
              <div
                key={project.id || project.title}
                className="p-4 rounded-2xl border border-gray-200/70 dark:border-gray-700/70 bg-white/60 dark:bg-gray-800/70 flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOtherEdit(project)}
                      className="p-2 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-300"
                      aria-label="Edit other project"
                    >
                      <FiEdit3 />
                    </button>
                    <button
                      onClick={() => deleteOtherProject(project.id)}
                      className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-300"
                      aria-label="Delete other project"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(project.tech || []).map((item, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-purple-600 dark:text-purple-300 hover:underline"
                >
                  <FiExternalLink /> View
                </a>
              </div>
            ))}
            {otherProjects.length === 0 && (
              <div className="p-4 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
                No other projects yet — add one to showcase.
              </div>
            )}
          </div>
        </div>,
      );
    }

    if (activeSection === 'offers') {
      return sectionCard(
        'What I Offer',
        'text-indigo-600 dark:text-indigo-400',
        <div className="grid lg:grid-cols-2 gap-6">
          <form onSubmit={handleOfferSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                required
                value={offerForm.title}
                onChange={(e) => setOfferForm({ ...offerForm, title: e.target.value })}
                className={inputClass}
                placeholder="Title"
              />
              <input
                value={offerForm.Icon}
                onChange={(e) => setOfferForm({ ...offerForm, Icon: e.target.value })}
                className={inputClass}
                placeholder="Icon"
              />
            </div>
            <textarea
              required
              value={offerForm.Description}
              onChange={(e) => setOfferForm({ ...offerForm, Description: e.target.value })}
              className={`${inputClass} min-h-[110px]`}
              placeholder="Short description"
            />
            <input
              value={offerForm.my_skills}
              onChange={(e) => setOfferForm({ ...offerForm, my_skills: e.target.value })}
              className={inputClass}
              placeholder="Skills (comma separated)"
            />
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={offerForm.Status}
                onChange={(e) => setOfferForm({ ...offerForm, Status: e.target.checked })}
                className="h-5 w-5 accent-blue-600"
                id="offer-status"
              />
              <label htmlFor="offer-status" className="text-sm text-gray-700 dark:text-gray-300">
                Mark as Available
              </label>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              {offerForm.id ? <FiEdit3 /> : <FiPlus />}
              {offerForm.id ? 'Update Offer' : 'Add Offer'}
            </button>
          </form>

          <div className="space-y-4 max-h-[460px] overflow-y-auto pr-2">
            {offers.map((offer) => (
              <div
                key={offer.id || offer.title}
                className="p-4 rounded-2xl border border-gray-200/70 dark:border-gray-700/70 bg-white/60 dark:bg-gray-800/70 flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{offer.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{offer.Description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOfferEdit(offer)}
                      className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300"
                      aria-label="Edit offer"
                    >
                      <FiEdit3 />
                    </button>
                    <button
                      onClick={() => deleteOffer(offer.id)}
                      className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-300"
                      aria-label="Delete offer"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(offer.my_skills || []).map((item, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  {offer.status ? <FiCheckCircle className="text-green-500" /> : <FiXCircle className="text-red-500" />}
                  <span>{offer.status ? 'Available' : 'Unavailable'}</span>
                </div>
              </div>
            ))}
            {offers.length === 0 && (
              <div className="p-4 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
                No offers yet — add a service to display.
              </div>
            )}
          </div>
        </div>,
      );
    }

    return sectionCard(
      'Incoming Messages',
      'text-emerald-600 dark:text-emerald-400',
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[420px] overflow-y-auto pr-2">
        {messages.map((msg) => {
          const initials = (msg.name || '?')
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2)
            .toUpperCase();

        return (
          <div
            key={msg.id || msg.email}
            className="relative group rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/70 dark:border-gray-700/70 shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-4 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center text-xs font-semibold text-white shadow-sm">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{msg.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-300 break-all">{msg.email}</p>
                    <p className="inline-flex items-center px-2 py-1 mt-1 text-[11px] font-medium rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
                      {msg.subject || 'No subject'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => deleteMessage(msg.id)}
                  className="p-1.5 rounded-lg text-xs text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/40 transition-colors"
                  aria-label="Delete message"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4 leading-relaxed">
                {msg.message}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                <span className="text-[11px] text-gray-400 dark:text-gray-500 italic">
                  {/* You can replace this with a real timestamp field later */}
                  Received recently
                </span>
                <a
                  href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject || '')}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
                  aria-label="Reply by mail"
                >
                  <FiMail className="w-3.5 h-3.5" />
                  Reply
                </a>
              </div>
            </div>
          </div>
        )})}
        {messages.length === 0 && (
          <div className="p-4 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
            No messages yet.
          </div>
        )}
      </div>,
      <div className="hidden" />,
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Dashboard</p>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Content Manager</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage projects, services and view incoming messages.</p>
          </div>
          <button
            onClick={refreshAll}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition"
          >
            <FiRefreshCw className={`${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        <div className="grid lg:grid-cols-[280px,1fr] gap-6">
          <div className="relative bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl border border-gray-200/60 dark:border-gray-700/60 shadow-2xl p-5 h-fit">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FiGrid className="text-blue-500" /> Control Center
            </h3>
            <div className="space-y-2">
              {[
                { key: 'projects', label: 'Featured Projects', icon: FiLayers, accent: 'from-blue-500 to-purple-500', count: projects.length || 0 },
                { key: 'other-projects', label: 'Other Projects', icon: FiBriefcase, accent: 'from-purple-500 to-pink-500', count: otherProjects.length || 0 },
                { key: 'offers', label: 'What I Offer', icon: FiEdit3, accent: 'from-indigo-500 to-blue-600', count: offers.length || 0 },
                { key: 'messages', label: 'Incoming Messages', icon: FiInbox, accent: 'from-emerald-500 to-teal-500', count: messages.length || 0 },
              ].map((item) => {
                const isActive = activeSection === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveSection(item.key)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl border transition shadow-sm ${
                      isActive
                        ? 'border-transparent text-white bg-gradient-to-r ' + item.accent + ' shadow-lg'
                        : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-blue-300 dark:hover:border-blue-600'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-semibold">{item.label}</span>
                    </span>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {item.count}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 p-4 text-sm text-gray-600 dark:text-gray-300">
              Tip: Use these panels to add, edit, or remove content. Data updates instantly and keeps the site consistent.
            </div>
          </div>

          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="space-y-6"
          >
            {renderSection()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

