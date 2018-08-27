import React from 'react';
import FontStyles from './typography.style';

export default function ThemeTypography() {
  // Text and styles are copied from
  // the Vivy zeplin guide WebUIs / Styleguide
  return (
    <FontStyles>
      <div className="container">
        <div className="title">Typography</div>
        <br />
        <h1>Heading One</h1>
        <small>TTNorms-Medium, 3.5rem (56px), #575756, line-height: 64px</small>
        <br />
        <h2>Heading Two</h2>
        <small>TTNorms-Regular, 3rem (48px), #575756, line-height: 60px</small>
        <br />
        <h3>Heading Three</h3>
        <small>
          TTNorms-Regular, 2.5rem (40px), #575756, line-height: 52px
        </small>
        <br />
        <h4>Heading Four</h4>
        <small>TTNorms-Regular, 2rem (32px), #575756, line-height: 40px</small>
        <br />
        <h4>Heading Five</h4>
        <small>TTNorms-Medium, 1.5rem (24px), #575756, line-height: 32px</small>
        <br />
        <h4>Heading Six</h4>
        <small>
          TTNorms-Medium, 1.25rem (20px), #575756, line-height: 20px
        </small>
        <br />
        <div className="small-title">Paragraph</div>
        <p>
          Teilen Sie Untersuchungs­ergebnisse und Befunde sicher und einfach mit
          Patienten und erhalten Sie in der gleichen Weise wichtige Unterlagen
          aus vorangegangenen Untersuchungen. Für eine bessere Patientenbindung,
          effiziente Diagnosen und weniger Doppelbehandlungen.
        </p>
        <small>TTNorms-Regular, 1rem (16px), #575756, line-height: 24px</small>
        <br />
        <div className="small-title">Paragraph Big</div>
        <p className="paragraph-big">
          Teilen Sie Untersuchungs­ergebnisse und Befunde sicher und einfach mit
          Patienten und erhalten Sie in der gleichen Weise wichtige Unterlagen
          aus vorangegangenen Untersuchungen. Für eine bessere Patientenbindung,
          effiziente Diagnosen und weniger Doppelbehandlungen.
        </p>
        <small>TTNorms-Regular, 1rem (16px), #575756, line-height: 26px</small>
        <br />
        <div className="caption">Caption</div>
        <small>
          TTNorms-Regular, 0.9375rem (15px), #575756, line-height: 20px
        </small>
        <br />
        <div className="link">This is a link</div>
        <small>TTNorms-Medium, 1rem (16px), #575756, line-height: 26px</small>
        <br />
      </div>
    </FontStyles>
  );
}
