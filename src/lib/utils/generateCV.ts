import { type Candidate } from '@/types/candidate';
import { formatDate } from './date';

export async function generateCV(candidate: Candidate): Promise<string> {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${candidate.name} - CV</title>
        <style>
          /* Reset */
          * { margin: 0; padding: 0; box-sizing: border-box; }
          
          /* Base */
          body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.5;
            color: #1a1a1a;
            padding: 2rem;
            max-width: 1000px;
            margin: 0 auto;
          }

          /* Branding */
          .brand {
            text-align: right;
            color: #3b82f6;
            font-size: 0.875rem;
            margin-bottom: 2rem;
          }

          /* Header */
          .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 2px solid #e5e7eb;
          }

          .header-content h1 {
            font-size: 2rem;
            color: #1a1a1a;
            margin-bottom: 0.5rem;
          }

          .header-content h2 {
            font-size: 1.25rem;
            color: #3b82f6;
            margin-bottom: 1rem;
          }

          .contact-info {
            font-size: 0.875rem;
            color: #4b5563;
          }

          /* Sections */
          section {
            margin-bottom: 2rem;
          }

          h3 {
            font-size: 1.25rem;
            color: #1a1a1a;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #e5e7eb;
          }

          /* Experience */
          .experience-item {
            margin-bottom: 1.5rem;
          }

          .experience-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
          }

          .company {
            font-weight: 600;
          }

          .period {
            color: #4b5563;
          }

          ul {
            margin-left: 1.5rem;
            margin-bottom: 0.5rem;
          }

          /* Skills */
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .skill-category h4 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          .skill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .skill-tag {
            background: #eff6ff;
            color: #3b82f6;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.875rem;
          }

          /* Footer */
          footer {
            margin-top: 3rem;
            padding-top: 1rem;
            border-top: 1px solid #e5e7eb;
            font-size: 0.75rem;
            color: #6b7280;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="brand">
          HireElite | Top JavaScript & TypeScript Developers
        </div>

        <header class="header">
          <div class="header-content">
            <h1>${candidate.name}</h1>
            <h2>${candidate.title}</h2>
          </div>
        </header>

        <section>
          <h3>Professional Summary</h3>
          <p>${candidate.summary}</p>
        </section>

        <section>
          <h3>Skills</h3>
          <div class="skills-grid">
            ${candidate.skills.map(category => `
              <div class="skill-category">
                <h4>${category.category}</h4>
                <div class="skill-list">
                  ${category.items.map(skill => `
                    <span class="skill-tag">${skill}</span>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <section>
          <h3>Work Experience</h3>
          ${candidate.workExperience.map(job => `
            <div class="experience-item">
              <div class="experience-header">
                <div>
                  <div class="company">${job.title}</div>
                </div>
                <div class="period">${job.period}</div>
              </div>
              <ul>
                ${job.achievements.map(achievement => `
                  <li>${achievement}</li>
                `).join('')}
              </ul>
              <div class="skill-list">
                ${job.technologies.map(tech => `
                  <span class="skill-tag">${tech}</span>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </section>

        <section>
          <h3>Education</h3>
          ${candidate.education.map(edu => `
            <div class="experience-item">
              <div class="experience-header">
                <div>
                  <div class="company">${edu.degree}</div>
                  <div>${edu.school}</div>
                </div>
                <div class="period">${edu.period}</div>
              </div>
              ${edu.description ? `<p>${edu.description}</p>` : ''}
            </div>
          `).join('')}
        </section>

        <footer>
          Generated via HireElite.com on ${formatDate(new Date())}
        </footer>
      </body>
    </html>
  `;

  return html;
}