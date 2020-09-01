import React, {Component} from 'react';
import {StyleSheet, StyleProp, TextStyle, ImageSourcePropType} from 'react-native';
import {asBaseComponent} from '../../commons/new';
import {Constants} from '../../helpers';
import Assets from '../../assets';
import {Colors, Typography} from '../../style';
import View from '../../components/view';
import Button, {ButtonPropTypes} from '../../components/button';
import Text from '../../components/text';

export interface ModalTopBarPropTypes {
  /**
     * title to display in the center of the top bar
     */
    title?: string;
    /**
     * title custom style
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * done action props (Button props)
     */
    doneButtonProps?: Omit<ButtonPropTypes, 'onPress'>;
    /**
     * done action label
     */
    doneLabel?: string;
    /**
     * done action icon
     */
    doneIcon?: ImageSourcePropType;
    /**
     * done action callback
     */
    onDone?: (props: any) => void;
    /**
     * cancel action props (Button props)
     */
    cancelButtonProps?: Omit<ButtonPropTypes, 'onPress'>;
    /**
     * cancel action label
     */
    cancelLabel?: string;
    /**
     * cancel action icon
     */
    cancelIcon?: ImageSourcePropType;
    /**
     * cancel action callback
     */
    onCancel?: (props: any) => void;
    /**
     * whether to include status bar or not (height claculations)
     */
    includeStatusBar?: boolean;
}

type topBarButtonProp = {
  onPress?: (props: any) => void;
  label?: string;
  icon?: ImageSourcePropType;
  accessibilityLabel?: string;
  buttonProps?: Omit<ButtonPropTypes, 'onPress'>;
}

const DEFAULT_BUTTON_PROPS = {
  color: Colors.blue30
};

/**
 * @description: Modal.TopBar, inner component for configuring the Modal component's title, buttons and statusBar
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ModalScreen.js
 */
class TopBar extends Component<ModalTopBarPropTypes> {
  static displayName = 'Modal.TopBar';

  static defaultProps = {
    doneLabel: 'Save',
    cancelIcon: Assets.icons.x,
    doneButtonProps: {},
    cancelButtonProps: {},
    includeStatusBar: Constants.isIOS
  };

  renderTopBarButton({onPress, label, icon, accessibilityLabel, buttonProps}: topBarButtonProp) {
    if (onPress && (label || icon)) {
      // @ts-expect-error
      const {iconStyle, labelStyle, ...otherButtonProps} = buttonProps;

      return (
        <Button
          link
          onPress={onPress}
          label={label}
          labelStyle={[styles.actionLabel, labelStyle]}
          iconSource={icon}
          iconStyle={[styles.icon, iconStyle]}
          {...DEFAULT_BUTTON_PROPS}
          accessibilityLabel={accessibilityLabel}
          {...otherButtonProps}
          hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
        />
      );
    }
  }

  renderDone() {
    const {doneButtonProps, doneLabel, doneIcon, onDone} = this.props;
    return this.renderTopBarButton({
      onPress: onDone,
      label: doneLabel,
      icon: doneIcon,
      accessibilityLabel: 'Done',
      buttonProps: doneButtonProps
    });
  }

  renderCancel() {
    const {cancelButtonProps, cancelLabel, cancelIcon, onCancel} = this.props;
    return this.renderTopBarButton({
      onPress: onCancel,
      label: cancelLabel,
      icon: cancelIcon,
      accessibilityLabel: 'Cancel',
      buttonProps: cancelButtonProps
    });
  }

  render() {
    const {title, titleStyle, includeStatusBar} = this.props;

    return (
      <View>
        {includeStatusBar && <View style={styles.statusBar}/>}
        <View style={styles.container}>
          <View row flex bottom paddingL-15 centerV>
            {this.renderCancel()}
          </View>
          <View row flex-3 bottom centerH centerV>
            <Text accessible={!!title} numberOfLines={1} text70 style={[styles.title, titleStyle]}>
              {title}
            </Text>
          </View>
          <View row flex bottom right paddingR-15 centerV>
            {this.renderDone()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 32 + Constants.statusBarHeight
  },
  statusBar: {
    height: Constants.statusBarHeight
  },
  title: {
    fontWeight: '500'
  },
  actionLabel: {
    ...Typography.text70
  },
  icon: {
    // width: 16,
    // height: 16,
    tintColor: Colors.dark10,
    marginBottom: 2
  }
});

export default asBaseComponent<ModalTopBarPropTypes>(TopBar);
