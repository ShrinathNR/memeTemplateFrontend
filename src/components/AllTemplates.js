import Axios  from 'axios'
import React, {useEffect,useState} from 'react'
// import image1 from "./../assests/1642481412362-Screenshot (120).png"

const AllTemplates = () => {
    //states of updated meme
    const [newMemeName, setNewMemeName] = useState("");
    const [newMemeTags, setNewMemeTags] = useState("");
    const [newEmotion, setNewEmotion] = useState("");
    const [newLanguage, setNewLanguage] = useState("");


    const [allMemesTemplate, setAllMemesTemplate] = useState([])
    useEffect(()=>{
        Axios.get('http://localhost:3001/read')
        .then((respose)=> {
            setAllMemesTemplate(respose.data);
        });
    },[])

    
    const deleteMemeTemplate = (id) =>{
        Axios.delete(`http://localhost:3001/delete/${id}`)
    };

    const updateMeme=(id)=>{
        Axios.put(`http://localhost:3001/update/`,{id,newMemeName,newMemeTags,newEmotion,newLanguage});
    };

    console.log(allMemesTemplate);
    return (
        <div>
            {allMemesTemplate.length !== 0 && <h2>Templates</h2>}
            
            <div className='allMemesTemplate'>
                {allMemesTemplate.map((memeTemplate,key)=>{
                    return (
                        <div className='eachMemeTemplate meme' key={key}>
                            <label>Name</label>
                            <input type="text" defaultValue = {memeTemplate.memeName} onChange={(event)=>{
                                setNewMemeName(event.target.value);
                            }}/>
                            <label>Tags(separated by commas)</label>
                            <input type="text" defaultValue={memeTemplate.memeTags} onChange={(event)=>{
                                setNewMemeTags(event.target.value);
                            }}/>
                            <label >Emotion</label>
                            <select name="emotions" id="emotions" defaultValue={memeTemplate.emotion} onChange={(event)=>{
                                setNewEmotion(event.target.value);
                            }}>
                                <option>Select Emotion</option>
                                <option value="Happy">Happy</option>
                                <option value="Sad">Sad</option>
                                <option value="Surprised">Surprised</option>
                                <option value="Angry">Angry</option>
                                <option value="Confused">Confused</option>
                            </select>
                            <label >Language</label>
                            <select id="languages" name="languages" defaultValue={memeTemplate.language} onChange={(event)=>{
                                setNewLanguage(event.target.value);
                            }}>
                                <option>Select Language</option>
                                <option value="af">Afrikaans</option>
                                <option value="sq">Albanian</option>
                                <option value="am">Amharic</option>
                                <option value="ar">Arabic</option>
                                <option value="an">Aragonese</option>
                                <option value="hy">Armenian</option>
                                <option value="ast">Asturian</option>
                                <option value="az">Azerbaijani</option>
                                <option value="eu">Basque</option>
                                <option value="be">Belarusian</option>
                                <option value="bn">Bengali</option>
                                <option value="bs">Bosnian</option>
                                <option value="br">Breton</option>
                                <option value="bg">Bulgarian</option>
                                <option value="ca">Catalan</option>
                                <option value="ckb">Central Kurdish</option>
                                <option value="zh">Chinese</option>
                                <option value="zh-HK">Chinese (Hong Kong)</option>
                                <option value="zh-CN">Chinese (Simplified)</option>
                                <option value="zh-TW">Chinese (Traditional)</option>
                                <option value="co">Corsican</option>
                                <option value="hr">Croatian</option>
                                <option value="cs">Czech</option>
                                <option value="da">Danish</option>
                                <option value="nl">Dutch</option>
                                <option value="en">English</option>
                                <option value="en-AU">English (Australia)</option>
                                <option value="en-CA">English (Canada)</option>
                                <option value="en-IN">English (India)</option>
                                <option value="en-NZ">English (New Zealand)</option>
                                <option value="en-ZA">English (South Africa)</option>
                                <option value="en-GB">English (United Kingdom)</option>
                                <option value="en-US">English (United States)</option>
                                <option value="eo">Esperanto</option>
                                <option value="et">Estonian</option>
                                <option value="fo">Faroese</option>
                                <option value="fil">Filipino</option>
                                <option value="fi">Finnish</option>
                                <option value="fr">French</option>
                                <option value="fr-CA">French (Canada)</option>
                                <option value="fr-FR">French (France)</option>
                                <option value="fr-CH">French (Switzerland)</option>
                                <option value="gl">Galician</option>
                                <option value="ka">Georgian</option>
                                <option value="de">German</option>
                                <option value="de-AT">German (Austria)</option>
                                <option value="de-DE">German (Germany)</option>
                                <option value="de-LI">German (Liechtenstein)</option>
                                <option value="de-CH">German (Switzerland)</option>
                                <option value="el">Greek</option>
                                <option value="gn">Guarani</option>
                                <option value="gu">Gujarati</option>
                                <option value="ha">Hausa</option>
                                <option value="haw">Hawaiian</option>
                                <option value="he">Hebrew</option>
                                <option value="hi">Hindi</option>
                                <option value="hu">Hungarian</option>
                                <option value="is">Icelandic</option>
                                <option value="id">Indonesian</option>
                                <option value="ia">Interlingua</option>
                                <option value="ga">Irish</option>
                                <option value="it">Italian</option>
                                <option value="it-IT">Italian (Italy)</option>
                                <option value="it-CH">Italian (Switzerland)</option>
                                <option value="ja">Japanese</option>
                                <option value="kn">Kannada</option>
                                <option value="kk">Kazakh</option>
                                <option value="km">Khmer</option>
                                <option value="ko">Korean</option>
                                <option value="ku">Kurdish</option>
                                <option value="ky">Kyrgyz</option>
                                <option value="lo">Lao</option>
                                <option value="la">Latin</option>
                                <option value="lv">Latvian</option>
                                <option value="ln">Lingala</option>
                                <option value="lt">Lithuanian</option>
                                <option value="mk">Macedonian</option>
                                <option value="ms">Malay</option>
                                <option value="ml">Malayalam</option>
                                <option value="mt">Maltese</option>
                                <option value="mr">Marathi</option>
                                <option value="mn">Mongolian</option>
                                <option value="ne">Nepali</option>
                                <option value="no">Norwegian</option>
                                <option value="nb">Norwegian Bokmål</option>
                                <option value="nn">Norwegian Nynorsk</option>
                                <option value="oc">Occitan</option>
                                <option value="or">Oriya</option>
                                <option value="om">Oromo</option>
                                <option value="ps">Pashto</option>
                                <option value="fa">Persian</option>
                                <option value="pl">Polish</option>
                                <option value="pt">Portuguese</option>
                                <option value="pt-BR">Portuguese (Brazil)</option>
                                <option value="pt-PT">Portuguese (Portugal)</option>
                                <option value="pa">Punjabi</option>
                                <option value="qu">Quechua</option>
                                <option value="ro">Romanian</option>
                                <option value="mo">Romanian (Moldova)</option>
                                <option value="rm">Romansh</option>
                                <option value="ru">Russian</option>
                                <option value="gd">Scottish Gaelic</option>
                                <option value="sr">Serbian</option>
                                <option value="sh">Serbo</option>
                                <option value="sn">Shona</option>
                                <option value="sd">Sindhi</option>
                                <option value="si">Sinhala</option>
                                <option value="sk">Slovak</option>
                                <option value="sl">Slovenian</option>
                                <option value="so">Somali</option>
                                <option value="st">Southern Sotho</option>
                                <option value="es">Spanish</option>
                                <option value="es-AR">Spanish (Argentina)</option>
                                <option value="es-419">Spanish (Latin America)</option>
                                <option value="es-MX">Spanish (Mexico)</option>
                                <option value="es-ES">Spanish (Spain)</option>
                                <option value="es-US">Spanish (United States)</option>
                                <option value="su">Sundanese</option>
                                <option value="sw">Swahili</option>
                                <option value="sv">Swedish</option>
                                <option value="tg">Tajik</option>
                                <option value="ta">Tamil</option>
                                <option value="tt">Tatar</option>
                                <option value="te">Telugu</option>
                                <option value="th">Thai</option>
                                <option value="ti">Tigrinya</option>
                                <option value="to">Tongan</option>
                                <option value="tr">Turkish</option>
                                <option value="tk">Turkmen</option>
                                <option value="tw">Twi</option>
                                <option value="uk">Ukrainian</option>
                                <option value="ur">Urdu</option>
                                <option value="ug">Uyghur</option>
                                <option value="uz">Uzbek</option>
                                <option value="vi">Vietnamese</option>
                                <option value="wa">Walloon</option>
                                <option value="cy">Welsh</option>
                                <option value="fy">Western Frisian</option>
                                <option value="xh">Xhosa</option>
                                <option value="yi">Yiddish</option>
                                <option value="yo">Yoruba</option>
                                <option value="zu">Zulu</option>
                            </select>
                            <img alt={`${memeTemplate.memeImage}`} src={require(`./../assests/${memeTemplate.memeImage}`)} />
                            <button className='deleteButton' onClick={()=>deleteMemeTemplate(memeTemplate._id)}>DELETE</button>
                            <button className='updateButton' onClick={()=>updateMeme(memeTemplate._id)}>UPDATE</button>
                            
                        </div>
                    );
                })}
            </div>
            
        </div>
    )
}

export default AllTemplates
