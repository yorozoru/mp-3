import {styled} from "styled-components";
import useTitleChanger from "../useTitleChanger";

const StyledMain = styled.main`
    padding: 0 2% 1% 2%;
`
export default function Experiences() {
    useTitleChanger("Experiences");
    return (
        <StyledMain>
            <h2>Experiences</h2>
        <img src="images/spark.png" alt="Boston University Spark! Logo"/>
            <p>
            Jan 2024 - May 2024<br/>
            </p>
            <ul>
                <li>Created Python scripts to automate the extraction of tables and other relevant texts from PDFs using PDFplumber.</li>
                <li>Implemented a robust data pipeline to defragment over 800+ pages of text into 10 CSVs, enhancing efficiency and simplifying data processing.</li>
                <li>Streamlined data representation by implementing Geopandas for visualizing 236 high schools on interactive maps, enhancing reader engagement with a personalized touch.</li>
                <li>Utilized correlation matrices and linear regression techniques to discern potential underlying trends within the dataset.</li>
                <li>Applied both the Nominatim geocoding API and US Census geocoding API to acquire precise geolocation data and validate school locations effectively, facilitating accurate mapping of area median income alongside each high school.</li>
            </ul>
        </StyledMain>
    );
}
