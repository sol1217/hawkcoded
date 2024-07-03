import React from 'react';
import { DepartmentsWrap, ItemDepartment, Image, DepartamentsInfoWrap, TitleDepartament, WelcomText } from "./../About.elements.ts";
import { departments } from "./../Data/constants.ts";

const DepartmentsSection: React.FC = () => (
  <>
    <DepartamentsInfoWrap>
      <TitleDepartament> ¿Que es Hawkcoded?</TitleDepartament>
      <WelcomText>
        Bienvenido a Hawkcoded, donde la innovación se encuentra con la
        excelencia en el desarrollo de software.
      </WelcomText>
    </DepartamentsInfoWrap>
    <DepartmentsWrap>
      {departments.map((department, index) => (
        <ItemDepartment key={index} data-aos="flip-up">
          <Image src={department.image} />
          <h2>{department.title}</h2>
          <p>{department.description}</p>
        </ItemDepartment>
      ))}
    </DepartmentsWrap>
  </>
);

export default DepartmentsSection;
