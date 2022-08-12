import React from 'react';
import styles from './QuizPage.module.css';
import QuizQuestionContainer from '../../UI/QuizQuestionContainer/QuizQuestionContainer';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';
import QuizOption from '../../components/QuizOption/QuizOption';
import OptionItem from '../../components/OptionItem/OptionItem';
import QuizNavigationContainer from '../../UI/QuizNavigationContainer/QuizNavigationContainer';
import NavigationItem from '../../components/NavigationItem/NavigationItem';

const QuizPage = () => {
    return (
        <div className={`${styles.quiz_page}`}>
            <div className={`${styles.quiz_container}`}>
                <div className={`${styles.quiz_wrapper}`}>
                    <QuizQuestionContainer>
                        <QuizQuestion>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Nisl nunc mi ipsum faucibus. Amet aliquam id diam maecenas ultricies mi ?
                        </QuizQuestion>
                        <QuizOption>
                            <OptionItem>A. Lorem ipsum dolor sit amet</OptionItem>
                            <OptionItem>B. Lorem ipsum dolor sit amet</OptionItem>
                            <OptionItem>C. Lorem ipsum dolor sit amet</OptionItem>
                            <OptionItem>D. Lorem ipsum dolor sit amet</OptionItem>
                            <OptionItem>E. Lorem ipsum dolor sit amet</OptionItem>
                        </QuizOption>
                    </QuizQuestionContainer>
                </div>
                <QuizNavigationContainer>
                    <NavigationItem active={true}>1</NavigationItem>
                    <NavigationItem>2</NavigationItem>
                    <NavigationItem>3</NavigationItem>
                    <NavigationItem>4</NavigationItem>
                    <NavigationItem>5</NavigationItem>
                    <NavigationItem>6</NavigationItem>
                </QuizNavigationContainer>
            </div>
        </div>
    )
}

export default QuizPage