import { OutboxOutlined } from "@mui/icons-material";
import { height } from "@mui/system";
import React, { useState } from "react";
import Select from "react-select";

export default function SearchDropDown() {
    const [selectedOptions, setSelectedOptions] = useState();

    function bindSelectDropDown(props, fullList, pageName) {
        var title;

        if (pageName == "ModelsPage") {
            title = "Select Brand"
        }else  if (pageName == "SubCategoryPage" ||pageName == "cate") {
            title = "Select Category"
        }
        if (pageName == "sub") {
            title = "Select SubCategory"
        }
        

        return (
            <div className="searchDrop pt-4">
                <div className="dropdown-container">
                    <Select

                        options={fullList}
                        placeholder={title}
                        value={selectedOptions}
                        onChange={props.handleSelect}

                        getOptionValue={(option) => option.id}
                        getOptionLabel={(option) =>pageName == "ModelsPage" ?option.brand_name :
                         pageName=="sub" ? option.sub_category_name :option.category_name}
                 
                        isSearchable={true}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                                ...theme.colors,
                                primary25: '#F4F8F9',
                                primary75: 'neutral0',
                                primary: '#AD4970'

                            },
                        })}

                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: "#F4F8F9",
                                border: '2px',
                                background: '#F4F8F9',
                                height: '55px',
                                color: "black"


                            }),
                        }


                        }
                    />
                </div>
            </div>
        )
    }

    return [bindSelectDropDown]

}

