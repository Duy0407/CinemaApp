import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { forwardRef, memo, useCallback } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IProps {
  children: React.ReactNode;
  height?: number;
}

const BottomSheet = (
  { children, height }: IProps,
  ref: React.ForwardedRef<BottomSheetModal>
) => {
  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...props}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      opacity={0.6}
    />
  ), []);
  const bottomInset = useSafeAreaInsets().bottom;
  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={[height ? height + bottomInset : "50%"]}
      backdropComponent={renderBackdrop}
      handleStyle={{display: 'none'}}
    >
      {children}
    </BottomSheetModal>
  );
};

export default memo(forwardRef(BottomSheet));
