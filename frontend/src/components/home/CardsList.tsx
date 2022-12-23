import React from 'react';
import { Link } from 'react-router-dom';
import { CardLayout } from '../layout/GlobalLayout';
import { CardType, TextType, WrapperType } from '../common/theme';
import useCategory from '../../hooks/useCategory';
import { checkName } from '../../util/functionUtil';

const CardsList = () => {
  const {
    catQuery: { data: categories },
  } = useCategory();

  const tabCards1 = categories?.map((card, index) => {
    const range = categories.length / 2;
    return (
      <>
        {index < range && (
          <li key={index} className={CardType.size}>
            <Link to={`/categories/${card.categoryName}`} className={CardType.layout}>
              <div className={CardType.imgWrapper}>
                <img className={CardType.img} src={card.mascotImage} alt="default card" />
              </div>
              <div className={CardType.text}>
                <h2>
                  <span className={TextType.mascotNameText}>{checkName(card.mascotName)}</span> 전하는 <br></br>
                  <span className={TextType.categoryNameText}>{card.categoryName}</span>
                </h2>
              </div>
            </Link>
          </li>
        )}
      </>
    );
  });
  const tabCards2 = categories?.map((card, index) => {
    const range = categories.length / 2;
    return (
      <>
        {index >= range && (
          <li key={index} className={CardType.size}>
            <Link to={`/categories/${card.categoryName}`} className={CardType.layout}>
              <div className={CardType.imgWrapper}>
                <img className={CardType.img} src={card.mascotImage} alt="default card" />
              </div>
              <div className={CardType.text}>
                <h2>
                  <span className={TextType.mascotNameText}>{checkName(card.mascotName)}</span> 전하는 <br></br>
                  <span className={TextType.categoryNameText}>{card.categoryName}</span>
                </h2>
              </div>
            </Link>
          </li>
        )}
      </>
    );
  });

  return (
    <CardLayout isHome>
      <div className="container mx-auto flex mt-12">
        <div className={TextType.titleText}>{'어떤 주제가 궁금한가요?'} &nbsp;</div>
        <div className={TextType.titleText + ' text-garden1'}>
          <Link to="/categories">
            {'>'} &nbsp;
            <span className="hover:underline hover:decoration-garden1 hover:decoration-4">더보기</span>{' '}
          </Link>
        </div>
      </div>
      <div className="mt-16"></div>
      <div className={WrapperType.homeCategoriesWrapper}>
        <ul id="rightMove" className={WrapperType.cardListRightWrapper}>
          {tabCards1}
          {tabCards1}
        </ul>
        <ul id="leftMove" className={WrapperType.cardListLeftWrapper}>
          {tabCards2}
          {tabCards2}
        </ul>
      </div>
    </CardLayout>
  );
};
export default CardsList;
