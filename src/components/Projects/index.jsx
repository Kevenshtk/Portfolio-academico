import { useState, useEffect, useRef } from "react";

import { IoIosRocket, IoMdFolder } from "react-icons/io";

import useWindowWidth from "../../hooks/useWindowWidth.js";

import "./styles.sass";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);
  const width = useWindowWidth();

  const projectsData = [
    {
      id: 1,
      title: "Crônicas de Calculária",
      preview:
        "https://kevenshtk.github.io/cronicas-de-calcularia/public/assets/img/inicio.png",
      semester: "2° Semestre",
      summary:
        "Jogo que combina conceitos matemáticos com elementos de aventura inspirados em jogos de RPG.",
      aboutProject: `O projeto foi desenvolvido no 2º semestre do curso durante a disciplina de Cálculo,
      cursada no primeiro semestre do ano de 2024 e ministrada pelo professor Adriana de Bortoli.
      O projeto trata-se de um jogos de tabuleiro onde a cada partida  um ou dois jogadores terão que explorar 
      diferentes tabuleiros, mergulhar em uma história cativante e aprimorar suas habilidades matemáticas.`,
      objectiveProject: "O objetivo foi desenvolver um jogo que ensina conceitos matemáticos estudados em aula, como:",
      itemsObjective: [
        {
          title: "Funções: ",
          content: "Funções do 1º grau e 2º grau, coeficientes linear, independente e angular, grau da função.",
        },
        {
          title: "Funções lineares: ",
          content: "Forma geral, raiz da função e Cálculo do valor de f(x).",
        },
        {
          title: "Funções quadráticas: ",
          content: "Potenciação (expoente), concavidade da parábola, fórmula do discriminante (Δ), fórmula de Bhaskara e substituição de valores em funções.",
        },
        {
          title: "Derivadas (Cálculo Diferencial): ",
          content: "Derivadas de potência, constante e polinômios.",
        },
      ],
      techStack: ["HTML", "Sass", "JavaScript", "Node"],
      deployUrl: "https://kevenshtk.github.io/cronicas-de-calcularia/",
      repoUrl: "https://github.com/Kevenshtk/cronicas-de-calcularia",
    },
    {
      id: 2,
      title: "Formulário de Inscrição",
      preview:
        "https://kevenshtk.github.io/Fatec/Segundo-Semestre/ihc/img/imgTela.png",
      semester: "2° Semestre",
      summary:
        "Formulário de inscrição para palestras de um evento de tecnologia.",
      aboutProject: `O projeto foi desenvolvido no 2º semestre do curso, durante a disciplina de IHC (Interação Humana Computador), 
      cursada no primeiro semestre do ano de 2024 e ministrada pelo professor Diego Henrique Emygdio Lázaro. 
      O site trata-se de uma landing page (página única), intuitiva, responsiva e que utiliza uma paleta de cores monocromática.`,
      objectiveProject:
        "O objetivo foi desenvolver um formulário de inscrição para palestras de um evento de tecnologia seguindo princípios como:",
      itemsObjective: [
        {
          title: "Estética e design minimalista: ",
          content:
            "Layout limpo, com cores harmônicas e poucos elementos por tela.",
        },
        {
          title: "Feedback e resposta: ",
          content:
            "Ações do usuário retornam respostas visuais claras (ex: busca por CEP, validação).",
        },
        {
          title: "Flexibilidade e eficiência de uso: ",
          content:
            "Navegação por etapas com setas, e busca automática de endereço.",
        },
      ],
      techStack: ["HTML", "Sass", "Bootstrap", "JavaScript", "Jquery"],
      deployUrl:
        "https://kevenshtk.github.io/Fatec/Segundo-Semestre/ihc/index.html",
      repoUrl:
        "https://github.com/Kevenshtk/Fatec/tree/main/Segundo-Semestre/ihc",
    },
    {
      id: 3,
      title: "Livraria Alma do Saber",
      preview:
        "https://kevenshtk.github.io/Fatec/Terceiro-Semestre/EstruturaDados/telaInicio.png",
      semester: "3° Semestre",
      summary: "Sistema de gestão para uma livraria.",
      aboutProject: `O projeto foi desenvolvido no 3º semestre do curso, durante a disciplina de Estrutura de Dados, cursada no segundo semestre do ano de 2024 
      e ministrada pelo professor Júlio Fernando Lieira. O sistema trata-se de uma aplicação desktop, que busca simula o funcionamento de uma livraria, utilizando 
      conceitos fundamentais de estrutura de dados.`,
      objectiveProject:
        "O objetivo foi desenvolver um sistema de gestão para uma livraria usando conceitos estudados em aula, como:",
      itemsObjective: [
        {
          title: "Structs: ",
          content:
            "para agrupar dados relacionados de livros, autores, clientes e vendas.",
        },
        {
          title: "Manipulação de arquivos: ",
          content:
            "leitura e escrita em arquivos binários como forma de guardar e recuperar dados.",
        },
        {
          title: "Modularização: ",
          content:
            "organização do código por funções específicas, facilitando a manutenção e leitura.",
        },
        {
          title: "Iteração sequencial: ",
          content:
            "uso de listas lineares para a leitura de dados armazenadas em arquivos.",
        },
      ],
      techStack: ["Linguagem C"],
      deployUrl: "#",
      repoUrl:
        "https://github.com/Kevenshtk/Fatec/tree/main/Terceiro-Semestre/EstruturaDados",
    },
    {
      id: 4,
      title: "Agência Bancária",
      preview:
        "https://kevenshtk.github.io/Fatec/Terceiro-Semestre/POO/Projeto_AgenciaBancaria/src/assets/imgTela.png",
      semester: "3° Semestre",
      summary:
        "Aplicação que busca simula o funcionamento de uma agência bancária.",
      aboutProject: `O projeto foi desenvolvido no 3º semestre do curso, durante a disciplina de POO (Programação Orientada a Objetos), cursada no segundo semestre do ano de 2024 
        e ministrada pelo professor Diego Henrique Emygdio Lázaro. O sistema trata-se de uma aplicação que busca simula o funcionamento de uma agência bancária, utilizando 
        conceitos fundamentais de POO e os princípios SOLID.`,
      objectiveProject:
        "O objetivo foi desenvolver um sistema para uma agência bancária usando conceitos estudados em aula, como:",
      itemsObjective: [
        {
          title: "Os Três pilares: ",
          content: "encapsulamento, herança e polimorfismo.",
        },
        {
          title: "Classes Abstratas: ",
          content: "serve como base ou modelo para as classes filhas.",
        },
        {
          title: "Agregação: ",
          content:
            "uma classe (todo) contém outra (parte), porém a parte pode existir independentemente do todo.",
        },
        {
          title: "Os princípios SOLID: ",
          content:
            "S (Princípio da Responsabilidade Única), O (Princípio Aberto/Fechado), L (Princípio da Substituição de Liskov), I (Princípio da Segregação de Interfaces), D (Princípio da Inversão de Dependências).",
        },
      ],
      techStack: ["Java"],
      deployUrl: "#",
      repoUrl:
        "https://github.com/Kevenshtk/Fatec/tree/main/Terceiro-Semestre/POO/Projeto_AgenciaBancaria",
    },
    {
      id: 5,
      title: "API Castração Avanhandava",
      preview:
        "https://kevenshtk.github.io/Fatec/Quarto-Semestre/Java/projectFiles/imgTela.png",
      semester: "4° Semestre",
      summary: "API REST para um sistema de gestão para castração de animais.",
      aboutProject: `O projeto foi desenvolvido no 4º semestre do curso, durante a disciplina de Programação para Web, cursada no primeiro semestre do ano de 2025 
      e ministrada pelo professor Anderson Pazin. O projeto trata-se de uma API (Interface de Programação de Aplicações) para um sistema de gestão das castrações de 
      animais na cidade de Avanhandava em parceria com uma ONG local, utilizando conceitos de padrões de API REST e do framework Spring.`,
      objectiveProject: "O objetivo foi desenvolver uma API REST com o uso do Spring Framework, para um sistema de gestão das castrações de animais usando conceitos estudados em aula, como:",
      itemsObjective: [
        {
          title: "Spring Framework: ",
          content: "framework de código aberto para a plataforma Java que facilita o desenvolvimento de aplicações.",
        },
        {
          title: "Spring Boot: ",
          content: "integração com Spring Web MVC, Spring Data JPA e Spring Validation.",
        },
        {
          title: "Mapeamento: ",
          content: "anotações JPA/Hibernate (@Entity, @Id, @Table, @Column).",
        },
        {
          title: "Framework ORM: ",
          content: "relacionamentos (@OneToOne, @OneToMany, @ManyToOne, @ManyToMany).",
        },
        {
          title: "Herança no Hibernate: ",
          content: "estratégias: SINGLE_TABLE, JOINED, TABLE_PER_CLASS.",
        },
        {
          title: "Repository no Spring Data JPA: ",
          content: "métodos prontos para CRUD e Anotação @Repository.",
        },
        {
          title: "Records: ",
          content: "uso de record para transferência de dados (imutáveis, getters automáticos).",
        },
        {
          title: "Testes de API: ",
          content: "com Postman para requisições e validação das rotas e JSON para submissão de dados.",
        },
        {
          title: "Operações CRUD na API REST: ",
          content: "GET, POST, PUT, DELETE.",
        },
      ],
      techStack: ["Java", "Spring", "H2"],
      deployUrl: "#",
      repoUrl:
        "https://github.com/Kevenshtk/Fatec/tree/main/Quarto-Semestre/Java",
    },
  ];

  useEffect(() => {
    if (selectedProject && modalRef.current && width <= 768) {
      modalRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedProject, width]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <p className="section-subtitle">Um pouco do que já construi</p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.preview} alt={project.title} />
                <div className="project-overlay">
                  <button
                    className="see-more-btn"
                    onClick={() => openModal(project)}
                  >
                    See More
                  </button>
                </div>
              </div>
              <span className="project-semester">{project.semester}</span>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>

            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={selectedProject.preview}
                  alt={selectedProject.title}
                />
              </div>

              <div className="modal-details">
                <h3>{selectedProject.title}</h3>
                <div className="details-content-about">
                  <h4>Sobre o projeto</h4>
                  <p>{selectedProject.aboutProject}</p>
                  <h4>Objetivo</h4>
                  <p>{selectedProject.objectiveProject}</p>
                  <ul>
                    {selectedProject.itemsObjective.map((item) => (
                      <li>
                        <span>{item.title}</span>
                        {item.content}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack">
                  <h4>Tecnologias:</h4>
                  <div className="tech-tags">
                    {selectedProject.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {selectedProject.deployUrl !== "#" && (
                    <a
                      className="project-link live"
                      href={selectedProject.deployUrl}
                      target="_blank"
                      rel="next"
                    >
                      <IoIosRocket /> Deploy
                    </a>
                  )}

                  <a
                    className="project-link repo"
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="next"
                  >
                    <IoMdFolder /> Repositório
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
