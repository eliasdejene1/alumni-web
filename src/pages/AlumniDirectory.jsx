import React, { useState } from 'react';
import alumniData from '../data/alumniData';

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [location, setLocation] = useState('');
  const [profession, setProfession] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [department, setDepartment] = useState(''); // New filter for departments

  // Get unique graduation years, specialties, and departments from alumniData
  const graduationYears = [...new Set(alumniData.map(alumni => alumni.graduationYear))];
  const specialties = [...new Set(alumniData.map(alumni => alumni.specialty))];
  const departments = [...new Set(alumniData.map(alumni => alumni.department))]; // Assuming department exists

  const filteredAlumni = alumniData.filter(alumni => {
    return (
      (searchTerm === '' || alumni.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (graduationYear === '' || alumni.graduationYear.toString() === graduationYear) &&
      (location === '' || alumni.location.toLowerCase() === location.toLowerCase()) &&
      (profession === '' || alumni.profession.toLowerCase() === profession.toLowerCase()) &&
      (specialty === '' || alumni.specialty.toLowerCase() === specialty.toLowerCase()) &&
      (department === '' || alumni.department.toLowerCase() === department.toLowerCase()) // New filter
    );
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Alumni Directory</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <select value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} className="border p-2 rounded mr-2">
          <option value="">Select Graduation Year</option>
          {graduationYears.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <select value={specialty} onChange={(e) => setSpecialty(e.target.value)} className="border p-2 rounded mr-2">
          <option value="">Select Specialty</option>
          {specialties.map(spec => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>
        <select value={department} onChange={(e) => setDepartment(e.target.value)} className="border p-2 rounded">
          <option value="">Select Department</option>
          {departments.map(dep => (
            <option key={dep} value={dep}>{dep}</option>
          ))}
        </select>
      </div>

      <div>
        {filteredAlumni.length > 0 ? (
          filteredAlumni.map(alumni => (
            <div key={alumni.id} className="bg-gray-100 p-4 rounded shadow mb-4">
              <h2 className="text-xl font-semibold">{alumni.name}</h2>
              <p><strong>Graduation Year:</strong> {alumni.graduationYear}</p>
              <p><strong>Location:</strong> {alumni.location}</p>
              <p><strong>Profession:</strong> {alumni.profession}</p>
              <p><strong>Specialty:</strong> {alumni.specialty}</p>
              <p><strong>Department:</strong> {alumni.department}</p> {/* Display department */}
              <button 
                className="mt-2 text-blue-600 underline" 
                onClick={() => alert(`Bio: ${alumni.bio}\nContact: ${alumni.contact}\nLinkedIn: ${alumni.socialLinks.linkedin}\nTwitter: ${alumni.socialLinks.twitter}`)}
              >
                View Profile
              </button>
            </div>
          ))
        ) : (
          <p>No alumni found.</p>
        )}
      </div>
    </div>
  );
};

export default AlumniDirectory;

