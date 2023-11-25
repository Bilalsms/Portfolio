import React from "react"
import { projectsData } from "./ProjectsData"
import ProjectCards from "./ProjectCards"

const SearchBar = ({filteredProjects, setFilteredProjects}) => {

  const handleSubmit = (e) => { e.preventDefault() }

  const handleSearchChange = (e) => {
    // if (!e.target.value) return setSearchResults([])
    const filteredProjects = projectsData.filter(project => {
      return project.technologies.toLowerCase().includes(e.target.value.toLowerCase())
    })

    setFilteredProjects(filteredProjects)
  }

    return (
      <header>
        <form onSubmit={handleSubmit} className="search">
          <input  className="search_input"
                  type="text"
                  placeholder="Search by technology..."
                  onChange={handleSearchChange}   
                  id = "search"
          />

          <button className="search_button" type="submit"> Button </button>
        </form>
      </header>
    )
}

export default SearchBar;