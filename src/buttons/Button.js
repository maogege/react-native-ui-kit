import React from 'react';
import PropTypes from 'prop-types'
import {TouchableOpacity,StyleSheet} from "react-native";

export class Button extends React.PureComponent{
    render(){
        return <TouchableOpacity>

        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container:{

    }
});

Button.propTypes = {
    label:PropTypes.string
};

