import { useState } from "react";
import "./Projects.css";
import fairplaylogo from "../assets/images/fairplay-logo.png";
import portfoliologo from "../assets/images/portfolio-logo.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "FairPlay",
      type: "team",
      image: fairplaylogo,
      tech: ["Spring Boot", "JSP", "MySQL"],
      desc: "가족 구성원이 함께 가사노동을 기록하고, 참여 현황과 기여도를 시각적으로 확인할 수 있는 플랫폼입니다.",
      github: "https://github.com/Han-Gyo/fairplay",
      demo: "http://fairplay-2025.duckdns.org:8080/",

      detail: {
        background: `가족이 함께 생활하지만 가사노동은 특정 구성원에게 집중되는 경우가 많습니다. 
          이러한 부담을 조금이라도 줄이고, 서로의 참여를 자연스럽게 확인할 수 있으면 좋겠다는 생각에서 시작한 프로젝트입니다. 
          가족 구성원이 함께 가사를 기록하고 기여도를 확인하며 공정한 분담 문화를 만들어갈 수 있도록 기획했습니다.`,
        features: [
          "가족 구성원이 할 일을 등록하고 완료 여부를 관리할 수 있는 가사노동 관리 기능",
          "난이도를 기반으로 점수를 부여하여 구성원별 기여도를 집계하는 참여도 시스템",
          "월별 점수와 순위를 차트로 시각화하여 참여 현황을 확인할 수 있는 통계 기능",
          "캘린더를 통해 일정과 할 일을 날짜별로 확인할 수 있는 일정 관리 기능",
          "지출 내역 기록 및 구성원 간 단가 비교가 가능한 가계부 기능",
        ],
        role: `백엔드 개발을 담당하며 데이터베이스 설계와 API 개발에 참여했습니다.
          가사노동 기록, 가계부, 캘린더, 통계 기능의 서버 로직을 구현하고 데이터 조회 및 집계 기능을 개발했습니다.`,
        troubleshooting: {
          problem:
            "가계부 단가 비교 기능에서 일부 사용자 데이터만 조회되는 문제가 발생했습니다.",

          cause:
            "조회 조건이 로그인 사용자 기준으로 설정되어 있어 같은 그룹에 속한 다른 구성원의 데이터가 비교 대상에서 제외되고 있었습니다.",

          solution: `그룹 기준으로 데이터를 조회하도록 JOIN 조건과 조회 쿼리를 수정했습니다. 
            이를 통해 사용자가 속한 그룹의 전체 데이터를 비교 대상으로 포함하여 정확한 단가 비교가 가능하도록 개선했습니다.`,
        },
      },
    },

    {
      id: 2,
      title: "Portfolio",
      type: "personal",
      image: portfoliologo,
      tech: ["React"],
      desc: "그동안 진행한 프로젝트와 기술 스택, 학습 경험을 한곳에서 확인하고, 개발자로서의 성장 과정을 보여주기 위해 제작한 포트폴리오 사이트입니다.",
      github: "#",
      demo: "#",

      detail: {
        background:
          "프로젝트를 진행하며 다양한 기술과 경험이 쌓였지만, 이를 체계적으로 정리하고 보여줄 수 있는 공간이 필요하다고 생각했습니다. 단순히 결과물을 나열하는 것이 아니라 프로젝트 경험과 학습 과정을 함께 기록하고, 개발자로서의 성장 과정을 전달할 수 있는 포트폴리오를 제작하게 되었습니다.",
        features: [
          "기술 스택과 프로젝트 경험 소개",
          "프로젝트 상세 정보 제공",
          "섹션 기반 원페이지 탐색",
          "다양한 화면 크기에 대응하는 반응형 UI",
        ],
        role: "UI 설계, 프론트엔드 개발",
      },
    },

    {
      id: 3,
      title: "Orbit",
      type: "personal",
      image: null,
      tech: ["Spring Boot", "JSP", "MySQL"],
      desc: "좋아하는 콘텐츠와 경험을 기록하며 취향을 발견하고 관리하는 플랫폼",
      github: "",
      demo: "",

      detail: {
        background: "",
        features: ["콘텐츠 저장", "태그 관리", "기록 조회"],
        role: "백엔드 + DB 설계",
        troubleshooting: {
          problem:
            "가계부 단가 비교 기능에서 일부 사용자 데이터만 조회되는 문제가 발생했습니다.",

          cause:
            "조회 조건이 로그인 사용자 기준으로 설정되어 있어 같은 그룹에 속한 다른 구성원의 데이터가 비교 대상에서 제외되고 있었습니다.",

          solution:
            "그룹 기준으로 데이터를 조회하도록 JOIN 조건과 조회 쿼리를 수정했습니다. 이를 통해 사용자가 속한 그룹의 전체 데이터를 비교 대상으로 포함하여 정확한 단가 비교가 가능하도록 개선했습니다.",
        },
      },
    },
  ];

  return (
    <section id="projects" className="container">
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {projects.map((p) => (
          <article
            key={p.id}
            className="project-card"
            onClick={() => setSelectedProject(p)}
          >
            {/* image */}
            <div className="project-image">
              {p.image ? <img src={p.image} alt={p.title} /> : "이미지"}
            </div>

            {/* tech */}
            <div className="project-tech">
              {p.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            {/* title */}
            <h3 className="project-title">{p.title}</h3>

            {/* desc */}
            <p className="project-desc">{p.desc}</p>

            {/* links */}
            <div className="project-links">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </a>
              )}
            </div>

            {/* type */}
            <div className={`project-type ${p.type}`}>
              {p.type === "team" ? "Team Project →" : "Personal Project →"}
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4>{selectedProject.title}</h4>

              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>

            {/* Background */}
            <section>
              <h3>Background</h3>
              <p className="desc">{selectedProject.detail.background}</p>
            </section>

            {/* features */}
            <section>
              <h3>Features</h3>
              <ul>
                {selectedProject.detail.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </section>

            {/* role */}
            <section>
              <h3>Role</h3>
              <p className="desc">{selectedProject.detail.role}</p>
            </section>

            {/* Problem & Solution */}
            {selectedProject.detail.troubleshooting && (
              <section>
                <h3>Problem & Solution</h3>

                <div className="trouble-box">
                  <h4>Problem</h4>
                  <p>{selectedProject.detail.troubleshooting.problem}</p>

                  <h4>Cause</h4>
                  <p>{selectedProject.detail.troubleshooting.cause}</p>

                  <h4>Solution</h4>
                  <p>{selectedProject.detail.troubleshooting.solution}</p>
                </div>
              </section>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
